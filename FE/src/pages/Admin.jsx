import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";

export default function AdminPanel({ token, role, id }) {
  const [admin, setAdmin] = useState([]);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [activeTab, setActiveTab] = useState("adminDetails");

  // State for modal/dialog
  const [editBook, setEditBook] = useState(null);
  const [editUser, setEditUser] = useState(null);

  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    genre: "",
    copies: "",
    price: "",
  });
  const [isadding, setIsAdding] = useState(false);

  // Fetch admin data
  const fetchAdmin = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAdmin(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch users, books, rentals data
  const fetchUsersData = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}/users`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUserDetails = async () => {
    try {
      await axios.put(
        `https://book-sphere-1.onrender.com/${role}/${id}/user/edit/${editUser.id}`,
        editUser,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("User details updated successfully!");
      setEditUser(null);
    } catch (err) {
      console.error(err);
      alert("Failed to reset user details.");
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}/books`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      setBooks(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // app.put(
  //   "/admin/:id/book/:bookId",
  //   authenticateToken,
  //   authorizeAdmin,
  //   bookValidate,
  //   async (req, res) => {
  //     const { bookId } = req.params;
  //     const { title, author, genre, price, copies } = req.body;
  //     console.log(bookId, title, author, genre, price, copies);

  //     try {
  //       const result = await pool.query(
  //         `UPDATE books SET title = $1, author = $2, genre = $3, price = $4, copies = $5 WHERE id = $6`,
  //         [title, author, genre, price, copies, bookId]
  //       );

  //       if (result.rowCount === 0) {
  //         return res.status(404).json({ error: "Book not found" });
  //       }
  //       res.status(200).json({ message: "Book updated successfully" });
  //     } catch (err) {
  //       console.error(err);
  //       res.status(500).json({ error: "Internal server error" });
  //     }
  //   }
  // );

  // Update book details
  const handleUpdateBook = async () => {
    console.log(editBook);

    try {
      await axios.put(
        `https://book-sphere-1.onrender.com/${role}/${id}/book/edit/${editBook.id}`,
        {
          title: editBook.title,
          author: editBook.author,
          genre: editBook.genre,
          price: editBook.price,
          copies: editBook.copies,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Book details updated successfully!");
      setEditBook(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update book details.");
    }
  };

  // Delete book
  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(
        `https://book-sphere-1.onrender.com/${role}/${id}/book/${bookId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Book deleted successfully!");
      fetchBooks();
    } catch (err) {
      console.error(err);
      alert("Failed to delete book.");
    }
  };

  const fetchRentals = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}/rentals/details`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRentals(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBook = async () => {
    console.log(addBook);

    try {
      await axios.post(
        `https://book-sphere-1.onrender.com/${role}/${id}/book/add`,
        {
          title: addBook.title,
          author: addBook.author,
          genre: addBook.genre,
          copies: addBook.copies,
          price: addBook.price,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Book added successfully!");
      setAddBook({
        title: "",
        author: "",
        genre: "",
        copies: "",
        price: "",
      });
      setIsAdding(false);
      fetchBooks();
    } catch (err) {
      console.error(err);
      alert("Failed to add book.");
    }
  };

  useEffect(() => {
    fetchAdmin();
    fetchUsersData();
    fetchBooks();
    fetchRentals();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4 lg:block justify-center sm:block md:block max-sm: hidden">
          <TabsTrigger value="adminDetails">Admin Details</TabsTrigger>
          <TabsTrigger value="usersDetails">Customers Details</TabsTrigger>
          <TabsTrigger value="books">All Books</TabsTrigger>
          <TabsTrigger value="rent">Rented Books Details</TabsTrigger>
        </TabsList>
        {/* Responsive tabs */}
        <select
          className="lg:hidden sm:hidden md:hidden max-sm: block px-4 py-2 w-full"
          name="tabs"
          id="tabs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="adminDetails">Admin Details</option>
          <option value="usersDetails">Customers Details</option>
          <option value="books">All Books</option>
          <option value="rent">Rented Books Details</option>
        </select>

        <TabsContent value="adminDetails">
          <h2 className="text-2xl font-semibold mb-4">Admin Details</h2>
          <Card className="p-4">
            <p>
              <strong>ID:</strong> {admin.id}
            </p>
            <p>
              <strong>Name:</strong> {admin.name}
            </p>
            <p>
              <strong>Phone:</strong> {admin.phone}
            </p>
            <p>
              <strong>Role:</strong> {admin.role}
            </p>
            <p>
              <strong>Admin since:</strong>{" "}
              {admin.created_at && new Date(admin.created_at).toDateString()}
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="usersDetails">
          <h2 className="text-2xl font-semibold mb-4">Customers Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users.map((user) => (
              <Card key={user.id} className="p-4 flex ">
                <section>
                  <p>
                    <strong>ID:</strong> {user.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Role:</strong> {user.role}
                  </p>
                  <p>
                    <strong>Customer since:</strong>{" "}
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </section>
                <Button
                  className="ml-auto bg-green-600"
                  onClick={() =>
                    setEditUser({
                      ...user,
                      id: user.id,
                      name: user.name,
                      phone: user.phone,
                      role: user.role,
                      newPassword: "",
                    })
                  }
                >
                  Edit
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="books">
          <section className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold mb-4">All Books</h2>
            <CirclePlus
              onClick={() => (handleAddBook, setIsAdding(!isadding))}
              className="cursor-pointer text-teal-600 hover:text-teal-800 transition-all size-12"
            />
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {books.map((book) => (
              <Card key={book.id} className="p-4">
                <section className="mb-4">
                  <p>
                    <strong>ID:</strong> {book.id}
                  </p>
                  <p>
                    <strong>Title:</strong> {book.title}
                  </p>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Genre:</strong> {book.genre}
                  </p>
                  <p>
                    <strong>Price:</strong> {book.price}
                  </p>
                  <p>
                    <strong>Total Copies:</strong> {book.copies}
                  </p>
                  <p>
                    <strong>Available Copies:</strong> {book.available_copies}
                  </p>
                </section>
                <section className="flex gap-2 justify-between">
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="outline" onClick={() => setEditBook(book)}>
                    Edit
                  </Button>
                </section>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rent">
          <h2 className="text-2xl font-semibold mb-4">Rented Books Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rentals.map((rental) => (
              <Card key={rental.rental_id} className="p-4">
                <p>
                  <strong>Rental ID:</strong> {rental.rental_id}
                </p>
                <p>
                  <strong>Book ID:</strong> {rental.book_id}
                </p>
                <p>
                  <strong>Book Title:</strong> {rental.book_title}
                </p>
                <p>
                  <strong>User ID:</strong> {rental.user_id}
                </p>
                <p>
                  <strong>Customer Name:</strong> {rental.customer_name}
                </p>
                <p>
                  <strong>Customer Phone:</strong> {rental.customer_phone}
                </p>
                <p>
                  <strong>Rent Date:</strong>{" "}
                  {rental.rent_date &&
                    new Date(rental.rent_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Return Date:</strong>{" "}
                  {rental.return_date
                    ? new Date(rental.return_date).toLocaleDateString()
                    : "Not yet returned"}
                </p>
                <p>
                  <strong>Returned:</strong>{" "}
                  {rental.returned ? (
                    <span className="text-green-600 font-bold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-bold">No</span>
                  )}
                </p>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Edit Book Dialog */}
      {editBook && (
        <Dialog open={Boolean(editBook)} onOpenChange={() => setEditBook(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Book</DialogTitle>
            </DialogHeader>

            <Input
              value={editBook.title}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  title: e.target.value,
                })
              }
              placeholder="Title"
            />
            <Input
              type="text"
              value={editBook.author}
              onChange={(e) =>
                setEditBook({ ...editBook, author: e.target.value })
              }
              placeholder="Author"
            />
            <Input
              type="text"
              value={editBook.genre}
              onChange={(e) =>
                setEditBook({ ...editBook, genre: e.target.value })
              }
              placeholder="Genre"
            />
            <Input
              type="number"
              value={editBook.price}
              onChange={(e) =>
                setEditBook({ ...editBook, price: parseInt(e.target.value) })
              }
              placeholder="Price"
            />
            <Input
              type="number"
              value={editBook.copies}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  copies: parseInt(e.target.value),
                  id: editBook.id,
                })
              }
              placeholder="Total Copies"
            />
            <Button onClick={handleUpdateBook}>Update</Button>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit User Dialog */}
      {editUser && (
        <Dialog open={Boolean(editUser)} onOpenChange={() => setEditUser(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset User Details</DialogTitle>
            </DialogHeader>
            <Input value={editUser.id} readOnly />
            <Input
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              placeholder="Name"
            />
            <Input
              value={editUser.phone}
              onChange={(e) =>
                setEditUser({ ...editUser, phone: e.target.value })
              }
              placeholder="Phone"
            />
            {/* edit role */}
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue={editUser.role}
              onChange={(e) =>
                setEditUser({ ...editUser, role: e.target.value })
              }
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <Input
              value={editUser.newPassword}
              onChange={(e) =>
                setEditUser({ ...editUser, newPassword: e.target.value })
              }
              placeholder="New Password"
              type="password"
            />
            <Button onClick={handleUserDetails}>Reset</Button>
          </DialogContent>
        </Dialog>
      )}

      {isadding && (
        <Dialog
          open={Boolean(isadding)}
          onOpenChange={() => setIsAdding(false)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Book</DialogTitle>
            </DialogHeader>
            <Input
              value={addBook.title}
              onChange={(e) =>
                setAddBook({ ...addBook, title: e.target.value })
              }
              placeholder="Title"
            />
            <Input
              value={addBook.author}
              onChange={(e) =>
                setAddBook({ ...addBook, author: e.target.value })
              }
              placeholder="Author"
            />
            <Input
              value={addBook.genre}
              onChange={(e) =>
                setAddBook({ ...addBook, genre: e.target.value })
              }
              placeholder="Genre"
            />
            <Input
              value={addBook.price}
              onChange={(e) =>
                setAddBook({ ...addBook, price: parseInt(e.target.value) })
              }
              placeholder="Price"
            />
            <Input
              value={addBook.copies}
              onChange={(e) =>
                setAddBook({
                  ...addBook,
                  copies: parseInt(e.target.value),
                })
              }
              placeholder="Total Copies"
            />
            <Button onClick={handleAddBook}>Add</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
