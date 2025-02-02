require("dotenv").config(); // Load environment variables
const { Pool } = require("pg");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const Joi = require("joi");

const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES; 

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Connect to the database and create necessary tables
(async () => {
  try {
    await pool.connect();
    console.log("Connected to database");

    const createCustomersTable = `
    CREATE TABLE IF NOT EXISTS customers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) CHECK (role IN ('user', 'admin')) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    const createBooksTable = `
     CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) UNIQUE NOT NULL,
        author VARCHAR(255) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        copies INTEGER NOT NULL,
        rented_copies INTEGER DEFAULT 0 NOT NULL,
        available_copies INTEGER GENERATED ALWAYS AS (copies - rented_copies) STORED
      );

    `;
    const createRentalTable = `
    CREATE TABLE IF NOT EXISTS rentals (
      id SERIAL PRIMARY KEY,
      customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
      book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
      rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      return_date TIMESTAMP,
      returned BOOLEAN DEFAULT FALSE,
      CONSTRAINT unique_rental UNIQUE (customer_id, book_id, returned)
    );
    `;

    await pool.query(createCustomersTable);
    await pool.query(createBooksTable);
    await pool.query(createRentalTable);
    console.log("Created tables successfully");
  } catch (error) {
    console.log("Error creating tables:", error);
  }
})();

// Customer Schema Validation
const regSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  phone: Joi.string()
    .min(10)
    .max(10)
    .pattern(/^[0-9]+$/)
    .required(),
  password: Joi.string()
    .min(6)
    .max(255)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    )
    .required(),
  role: Joi.string().valid("user", "admin").required(),
});

// Book Schema Validation
const bookSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  author: Joi.string().min(3).max(255).required(),
  genre: Joi.string().min(3).max(255).required(),
  price: Joi.number().min(1).required(),
  copies: Joi.number().min(1).required(),
});

// Book Validation Middleware
const bookValidate = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// Token Authentication Middleware
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userResult = await pool.query(
      "SELECT * FROM customers WHERE id = $1",
      [decoded.userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = userResult.rows[0];
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid token" });
  }
};

// Admin Authorization Middleware
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ error: "Access forbidden: Insufficient permission" });
  }
  next();
};

// Register User
app.post("/register", async (req, res) => {
  console.log(req.body);

  const { error } = regSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  console.log("hello");
  const { name, phone, password, role } = req.body;
  console.log(name, phone, password, role);

  try {
    const existingUser = await pool.query(
      "SELECT * FROM customers WHERE phone = $1",
      [phone]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO customers (name, phone, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, phone, hashedPassword, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login User
app.post("/login", async (req, res) => {
  console.log(req.body);
  const loginSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("user", "admin").required(),
  });
  console.log("hello");

  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, password, role } = req.body;
  console.log(name, password, role);

  try {
    const result = await pool.query("SELECT * FROM customers WHERE name = $1", [
      name,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (user.role !== role) {
      return res.status(403).json({ error: "Access denied for this role" });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES,
    });

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get User Details
app.get("/user/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  try {
    const result = await pool.query("SELECT * FROM customers WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update User Details
app.put("/user/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, phone, password } = req.body;

  try {
    const result = await pool.query(
      "UPDATE customers SET name = $1, phone = $2, password = $3 WHERE id = $4",
      [name, phone, password, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  View Books for Rent (/books) for User
app.get("/user/:id/books/:genre", authenticateToken, async (req, res) => {
  const { genre } = req.params;
  const getGenres = await pool.query(
    "SELECT DISTINCT genre FROM books WHERE available_copies > 0"
  );
  const allGenres = getGenres.rows.map((row) => row.genre);
  // console.log(allGenres);

  // search by genre
  if (genre !== "all") {
    try {
      const result = await pool.query(
        "SELECT id, title, author, genre, price, copies, available_copies FROM books WHERE genre = $1 AND available_copies > 0",
        [genre]
      );

      res.status(200).json({ books: result.rows, genres: allGenres });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    try {
      const result = await pool.query(
        "SELECT id, title, author, genre, price, copies, available_copies FROM books"
      );

      res.status(200).json({ books: result.rows, genres: allGenres });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// ---------------------- Admin Routes ----------------------

app.get("/admin/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  const { id } = req.params;

  // Validate the id (ensure it's a valid number)
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  } else {
    try {
      const result = await pool.query(`SELECT * FROM customers WHERE id = $1`, [
        id,
      ]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(result.rows[0]);
      res.status(200).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

// View User's Rental History
app.get("/user/:id/rentals", authenticateToken, async (req, res) => {
  // Validate customer ID from the authenticated token
  if (req.user.id !== parseInt(req.params.id)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 10; // Default to 10 rentals per page
  const offset = (page - 1) * limit;

  try {
    const result = await pool.query(
      `
      SELECT
        rentals.id AS rental_id,
        books.title AS book_title,
        rentals.rent_date,
        rentals.return_date,
        rentals.returned
      FROM rentals
      JOIN books ON rentals.book_id = books.id
      WHERE rentals.customer_id = $1
      ORDER BY rentals.rent_date DESC
      LIMIT $2 OFFSET $3
      `,
      [id, limit, offset]
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to get all users
// search by name along with their data show their rental history
app.get(
  "/admin/:id/users/:search",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { search } = req.params;

    try {
      let result;
      if (search !== "all") {
        result = await pool.query(
          "SELECT * FROM customers WHERE name ILIKE '%' || $1 || '%'",
          [search]
        );
      } else {
        result = await pool.query("SELECT * FROM customers");
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      const usersWithRentalHistory = [];

      // Fetch rental history sequentially for each customer
      for (let user of result.rows) {
        const rentalHistory = await pool.query(
          `
          SELECT
            rentals.id AS rental_id,
            books.title AS book_title,
            rentals.rent_date
          FROM rentals
          JOIN books ON rentals.book_id = books.id
          WHERE rentals.customer_id = $1
          `,
          [user.id]
        );

        usersWithRentalHistory.push({
          user,
          rentalHistory: rentalHistory.rows,
        });
      }

      res.status(200).json(usersWithRentalHistory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Reset User details (Admin)
app.put(
  "/admin/:id/user/edit/:userId",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { userId } = req.params;
    const { name, phone, role, newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    try {
      const result = await pool.query(
        "UPDATE customers SET name = $1, phone = $2, role = $3, password = $4 WHERE id = $5",
        [name, phone, role, hashedPassword, userId]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User details updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Get All Books (Admin)
app.get(
  "/admin/:id/books/:genre",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { genre } = req.params;
    const getGenres = await pool.query(
      "SELECT DISTINCT genre FROM books WHERE available_copies > 0"
    );
    const allGenres = getGenres.rows.map((row) => row.genre);
    // console.log(allGenres);

    // search by genre
    if (genre !== "all") {
      try {
        const result = await pool.query(
          "SELECT id, title, author, genre, price, copies, available_copies FROM books WHERE genre = $1 AND available_copies > 0",
          [genre]
        );

        res.status(200).json({ books: result.rows, genres: allGenres });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      try {
        const result = await pool.query(
          "SELECT id, title, author, genre, price, copies, available_copies FROM books"
        );

        res.status(200).json({ books: result.rows, genres: allGenres });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }
);

// Update book details
app.put(
  "/admin/:id/book/edit/:bookId",
  authenticateToken,
  authorizeAdmin,
  bookValidate,
  async (req, res) => {
    const { bookId } = req.params;
    const { title, author, genre, price, copies } = req.body;
    console.log(bookId, title, author, genre, price, copies);

    try {
      const result = await pool.query(
        `UPDATE books SET title = $1, author = $2, genre = $3, price = $4, copies = $5 WHERE id = $6`,
        [title, author, genre, price, copies, bookId]
      );

      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json({ message: "Book updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Delete Book (Admin)
app.delete(
  "/admin/:id/book/:bookId",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { bookId } = req.params;

    try {
      const result = await pool.query("DELETE FROM books WHERE id = $1", [
        bookId,
      ]);

      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Book not found" });
      }

      res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Get Rental Details (Admin)
app.get(
  "/admin/:id/rentals/details",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const result = await pool.query(`
      SELECT
        rentals.id AS rental_id,
        customers.id AS customer_id,
        customers.name AS customer_name,
        customers.phone AS customer_phone,
        books.id AS book_id,
        books.title AS book_title,
        rentals.rent_date,
        rentals.return_date,
        rentals.returned
      FROM rentals
      JOIN customers ON rentals.customer_id = customers.id
      JOIN books ON rentals.book_id = books.id
      ORDER BY rentals.rent_date
    `);
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// / add book (Admin)

app.post(
  "/admin/:id/book/add",
  authenticateToken,
  authorizeAdmin,
  bookValidate,
  async (req, res) => {
    const { title, author, genre, price, copies } = req.body;
    try {
      const result = await pool.query(
        "INSERT INTO books (title, author, genre, price, copies) VALUES ($1, $2, $3, $4, $5)",
        [title, author, genre, price, copies]
      );
      res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
      if (error.code === "23505") {
        // Handle duplicate key error for unique constraint
        res.status(400).json({
          success: false,
          message: `The book title ${title} already exists. Please choose a different title.`,
          error: error.message,
        });
      } else {
        // Generic error handler
        res.status(500).json({
          success: false,
          message: "An error occurred while adding the book.",
          error: error.message,
        });
      }
    }
  }
);

// admin will rent out book
app.post(
  "/admin/:id/rentbook/:bookId/:userId",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { bookId, userId } = req.params;

    try {
      // Begin the transaction
      await pool.query("BEGIN");

      // Check if book exists and lock the row for update
      const bookResult = await pool.query(
        "SELECT * FROM books WHERE id = $1 FOR UPDATE",
        [bookId]
      );

      if (bookResult.rows.length === 0) {
        await pool.query("ROLLBACK");
        return res.status(404).json({ error: "Book not found" });
      }

      const book = bookResult.rows[0];

      if (book.available_copies <= 0) {
        await pool.query("ROLLBACK");
        return res.status(400).json({ error: "No copies available for rent" });
      }

      // Check if user already rented the book before
      const existingRental = await pool.query(
        "SELECT * FROM rentals WHERE customer_id = $1 AND book_id = $2",
        [userId, bookId]
      );

      if (existingRental.rows.length > 0) {
        await pool.query("ROLLBACK");
        return res
          .status(409)
          .json({ error: "Book already rented by the user." });
      }

      // Insert rental record
      const rentalResult = await pool.query(
        "INSERT INTO rentals (customer_id, book_id) VALUES ($1, $2) RETURNING *",
        [userId, bookId]
      );

      // Update book record (decrease available copies, increase rented copies)
      await pool.query(
        "UPDATE books SET rented_copies = rented_copies + 1 WHERE id = $1",
        [bookId]
      );

      // Commit the transaction
      await pool.query("COMMIT");

      res.status(201).json({
        message: "Book rented successfully",
        rental: rentalResult.rows[0],
      });
    } catch (err) {
      // Rollback transaction in case of error
      await pool.query("ROLLBACK");
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// return book
app.post(
  "/admin/:id/returnbook/:bookId/:userId",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { bookId, userId } = req.params;

    try {
      // Begin the transaction
      await pool.query("BEGIN");

      // Check if book exists and lock the row for update
      const bookResult = await pool.query(
        "SELECT * FROM books WHERE id = $1 FOR UPDATE",
        [bookId]
      );

      if (bookResult.rows.length === 0) {
        await pool.query("ROLLBACK");
        return res.status(404).json({ error: "Book not found" });
      }

      const book = bookResult.rows[0];

      if (book.rented_copies <= 0) {
        await pool.query("ROLLBACK");
        return res.status(400).json({ error: "Book is not rented" });
      }

      // Update book record (decrease rented copies, increase available copies)
      await pool.query(
        "UPDATE books SET rented_copies = rented_copies - 1 WHERE id = $1",
        [bookId]
      );

      // Update rental record (mark as returned)
      await pool.query(
        "UPDATE rentals SET returned = TRUE, return_date = CURRENT_TIMESTAMP WHERE customer_id = $1 AND book_id = $2 AND returned = FALSE",
        [userId, bookId]
      );

      // Commit the transaction
      await pool.query("COMMIT");

      res.status(200).json({ message: "Book returned successfully" });
    } catch (err) {
      // Rollback transaction in case of error
      await pool.query("ROLLBACK");
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);


// Delete User
app.delete(
  "/:userId/del",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    console.log(req.params);

    try {
      const { userId } = req.params;
      await pool.query("DELETE FROM customers WHERE id = $1", [userId]);
      console.log("User deleted successfully");

      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Admin Routes - Admin users only
app.use("/admin", authenticateToken, authorizeAdmin);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
