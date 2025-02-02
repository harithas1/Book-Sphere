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
    title VARCHAR(255) UNIQUE NOT NULL,             -- Title of the book
    author VARCHAR(255) NOT NULL,                    -- Author of the book
    age_group VARCHAR(255),                          -- Age group (Kids, Teens, Adults)
    book_type VARCHAR(255),                          -- Book type (Jokes, Comics, etc.)
    language VARCHAR(255),                           -- Language of the book (e.g., English, Hindi, etc.)
    reading_level VARCHAR(255),                      -- Reading level (Easy, Moderate, Advanced)
    theme VARCHAR(255),                              -- Book theme (Adventure, Mystery, etc.)
    price DECIMAL(10, 2) NOT NULL,                   -- Price of the book
    copies INTEGER NOT NULL,                         -- Total copies of the book
    rented_copies INTEGER DEFAULT 0 NOT NULL,        -- Rented copies of the book
    available_copies INTEGER GENERATED ALWAYS AS (copies - rented_copies) STORED,  -- Available copies
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp of when the book was added
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp of the last update
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
  price: Joi.number().min(1).required(),
  copies: Joi.number().min(1).required(),
  rented_copies: Joi.number().min(0), // rented_copies should be >= 0, but can be omitted (defaults to 0)
  language: Joi.string().min(2).max(255).optional(),
  book_type: Joi.string().min(3).max(255).optional(),
  age_group: Joi.string().min(3).max(255).optional(),
  theme: Joi.string().min(3).max(255).optional(),
  reading_level: Joi.string().min(3).max(255).optional(),
}).custom((value, helper) => {
  if (value.rented_copies > value.copies) {
    return helper.message("Rented copies cannot exceed total copies");
  }
  return value;
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
app.get("/user/:id/books/:filter", authenticateToken, async (req, res) => {
  const { filter } = req.params; // Get the filter type (book_type, theme, etc.)
  const userId = req.params.id; // Capture the user ID

  try {
    // Step 1: Get distinct filter values for the dropdown or filter options
    const getFilters = await pool.query(
      "SELECT DISTINCT book_type FROM books WHERE available_copies > 0"
    );
    const allFilters = getFilters.rows.map((row) => row.book_type); // Getting distinct book types

    // Step 2: Query books based on the selected filter (e.g., book_type, theme, etc.)
    let query =
      "SELECT id, title, author, book_type, price, copies, available_copies FROM books WHERE available_copies > 0";
    let queryParams = [];

    if (filter !== "all") {
      query += " AND book_type = $1"; // Filter by book_type (you can change this to 'theme', 'age_group', etc.)
      queryParams.push(filter);
    }

    const result = await pool.query(query, queryParams);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found for the selected filter." });
    }

    // Step 3: Return books and available filters (book types)
    res.status(200).json({ books: result.rows, filters: allFilters });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ---------------------- Admin Routes ----------------------

// fetch admin data
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
    const { id, search } = req.params;

    // Validate the admin ID (ensure it's a valid number)
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid admin ID format" });
    }

    try {
      let result;

      // If search is not 'all', perform a case-insensitive search on customer names
      if (search !== "all") {
        result = await pool.query(
          "SELECT * FROM customers WHERE name ILIKE '%' || $1 || '%'",
          [search]
        );
      } else {
        // If search is 'all', return all customers
        result = await pool.query("SELECT * FROM customers");
      }

      // If no customers are found
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      const usersWithRentalHistory = [];

      // Fetch rental history sequentially for each customer
      for (let user of result.rows) {
        // Validate that the customer ID exists
        if (isNaN(user.id)) {
          return res.status(400).json({ error: "Invalid customer ID format" });
        }

        // Query rental history for each user
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

        // Add user data with rental history
        usersWithRentalHistory.push({
          user,
          rentalHistory: rentalHistory.rows,
        });
      }

      // Return the users with their rental histories
      res.status(200).json(usersWithRentalHistory);
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: "An error occurred while fetching users" });
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

    try {
      // Prepare the updated values
      const updatedValues = [name, phone, role];
      let updateQuery = "UPDATE customers SET name = $1, phone = $2, role = $3";

      // Only hash and update the password if a new password is provided
      if (newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        updatedValues.push(hashedPassword);
        updateQuery += ", password = $4";
      }

      // Add the userId to the end of the query to target the correct user
      updatedValues.push(userId);
      updateQuery += " WHERE id = $5";

      const result = await pool.query(updateQuery, updatedValues);

      // Check if the user exists
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

// Get All Books (Admin)/ fetch book seach
app.get(
  "/admin/:id/books", // Using query parameters for filtering
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const { language, theme, book_type, age_group } = req.query;

    // Start with the base query that fetches only books with available copies
    let query = `
      SELECT id, title, author, language, theme, book_type, age_group, price, copies, available_copies
      FROM books
      WHERE available_copies > 0
    `;
    let queryParams = [];

    // Dynamically add filters if they are provided in the query string
    if (language) {
      query += " AND language = $1";
      queryParams.push(language);
    }

    if (theme) {
      query += " AND theme = $2";
      queryParams.push(theme);
    }

    if (book_type) {
      query += " AND book_type = $3";
      queryParams.push(book_type);
    }

    if (age_group) {
      query += " AND age_group = $4";
      queryParams.push(age_group);
    }

    try {
      // If no filters are provided, return all available books
      const result = await pool.query(query, queryParams);

      // Check if there are any books available
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No books found" });
      }

      // Send the filtered or all books in the response
      res.status(200).json({
        books: result.rows,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Update book details
app.put(
  "/admin/:id/book/edit/:bookId",
  authenticateToken,
  authorizeAdmin,
  bookValidate, // Assuming this middleware validates the incoming data
  async (req, res) => {
    const { bookId } = req.params;
    const {
      title,
      author,
      price,
      copies,
      rented_copies,
      language,
      book_type,
      age_group,
      theme,
      reading_level,
    } = req.body;

    // Log the input for debugging
    console.log(
      bookId,
      title,
      author,
      price,
      copies,
      rented_copies,
      language,
      book_type,
      age_group,
      theme,
      reading_level
    );

    try {
      // Update query for books table
      const result = await pool.query(
        `UPDATE books SET 
          title = $1, 
          author = $2, 
          price = $3, 
          copies = $4, 
          rented_copies = $5, 
          language = $6, 
          book_type = $7, 
          age_group = $8, 
          theme = $9, 
          reading_level = $10, 
          updated_at = CURRENT_TIMESTAMP 
        WHERE id = $11`,
        [
          title,
          author,
          price,
          copies,
          rented_copies,
          language,
          book_type,
          age_group,
          theme,
          reading_level,
          bookId,
        ]
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
    const {
      title,
      author,
      price,
      copies,
      age_group,
      book_type,
      language,
      reading_level,
      theme,
    } = req.body;

    // Ensure all required fields are provided based on the schema
    if (
      !title ||
      !author ||
      !price ||
      !copies ||
      !age_group ||
      !book_type ||
      !language ||
      !reading_level ||
      !theme
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // Insert book into the database based on schema
      const result = await pool.query(
        `INSERT INTO books (title, author, price, copies, age_group, book_type, language, reading_level, theme)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          title,
          author,
          price,
          copies,
          age_group,
          book_type,
          language,
          reading_level,
          theme,
        ]
      );

      res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
      if (error.code === "23505") {
        // Handle duplicate key error for unique constraint
        res.status(400).json({
          success: false,
          message: `The book title "${title}" already exists. Please choose a different title.`,
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
