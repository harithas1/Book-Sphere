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
import { useNavigate } from "react-router-dom";

export default function Admin({ token, role, id }) {
  const [admin, setAdmin] = useState([]);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [activeTab, setActiveTab] = useState("adminDetails");
  const [genres, setGenres] = useState(["all genres"]);

  // State for modal/dialog
  const [editBook, setEditBook] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [rentOutBook, setRentOutBook] = useState(null);
  const [returnBook, setReturnBook] = useState(null);

  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    genre: "",
    copies: "",
    price: "",
  });
  const [isadding, setIsAdding] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedUserName, setSelectedUserName] = useState("all");

  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedId = localStorage.getItem("id");

    if (storedToken) {
      navigate(`/${storedRole}/${storedId}`);
    }
  }, [navigate]);

  // Fetch admin data
  const fetchAdmin = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);

      setAdmin(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch users, books, rentals data
  const fetchUsersData = async (selectedUserName) => {
    console.log(selectedUserName);

    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}/users/${
          selectedUserName || "all"
        }`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);

      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsersData(selectedUserName);
  }, [selectedUserName]);

  const handleEditUser = async () => {
    console.log(editUser);
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

  const fetchBooks = async (selectedGenre) => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/${role}/${id}/books/${selectedGenre}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data.books);
      setBooks(response.data.books);
      setGenres(["all genres", ...response.data.genres]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks(selectedGenre);
  }, [selectedGenre]);

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
      fetchBooks(selectedGenre);
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
      console.log(response.data);

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
      fetchBooks(selectedGenre);
    } catch (err) {
      console.error(err);
      alert("Failed to add book.");
    }
  };
  // admin/:id/user/:userId
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://book-sphere-1.onrender.com/${userId}/del`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("User deleted successfully!");
      fetchUsersData(selectedUserName);
    } catch (err) {
      console.error(err);
      alert("Failed to delete user.");
    }
  };

  // rent book
  //  "/admin/:id/rentbook/:bookId/:userId",

  const handleRentOutBook = async (rentOutBook) => {
    console.log(rentOutBook);

    try {
      await axios.post(
        `https://book-sphere-1.onrender.com/${role}/${id}/rentbook/${rentOutBook.id}/${rentOutBook.userId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Book rented successfully!");
      setRentOutBook(null);
      fetchBooks(selectedGenre);
      fetchRentals();
    } catch (err) {
      console.error(err);
      alert("Failed to rent book.");
    }
  };

  const handleReturnBook = async (returnBook) => {
    const bid = returnBook.book_id;
    const custId = returnBook.customer_id;
    console.log(bid, custId);

    try {
      await axios.post(
        `https://book-sphere-1.onrender.com/${role}/${id}/returnbook/${bid}/${custId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Book returned successfully!");
      setReturnBook(null);
      fetchBooks(selectedGenre);
      fetchRentals();
    } catch (err) {
      console.error(err);
      alert("Failed to return book.");
    }
  };

  useEffect(() => {
    fetchAdmin();
    fetchUsersData(selectedUserName);
    fetchBooks(selectedGenre);
    fetchRentals();
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="max-w-8xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">
        Hello <span className="text-teal-600">{admin?.name}!</span>
      </h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 lg:block justify-center sm:block md:block max-sm: hidden">
          <TabsTrigger value="adminDetails">Profile</TabsTrigger>
          <TabsTrigger value="usersDetails">Customers Details</TabsTrigger>
          <TabsTrigger value="books">All Books</TabsTrigger>
          <TabsTrigger value="rent">Rented Books Details</TabsTrigger>
        </TabsList>
        {/* Responsive tabs */}
        <select
          className="lg:hidden sm:hidden md:hidden max-sm: block px-4 py-2 w-full rounded-md"
          name="tabs"
          id="tabs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option> select a tab</option>
          <option value="adminDetails">Admin Details</option>
          <option value="usersDetails">Customers Details</option>
          <option value="books">All Books</option>
          <option value="rent">Rented Books Details</option>
        </select>

        <TabsContent value="adminDetails">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>

          {admin?.id && (
            <Card className="p-4 space-y-2">
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
          )}

          <section className="flex justify-between mt-4">
            <Button onClick={() => navigate("/")}>Go to Home</Button>
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
          </section>
        </TabsContent>

        <TabsContent value="usersDetails">
          <section className="mb-4 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between ">
            <h2 className="text-2xl font-semibold mb-4">Customers Details</h2>
            <input
              // value={selectedUserName}
              className="border border-gray-300 p-2 rounded-md"
              onChange={(e) => setSelectedUserName(e.target.value)}
              type="text"
              placeholder="🔍 Search"
            />
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {users.map(({ user, rentalHistory }) => (
              <Card
                key={user.id}
                className="p-4 shadow-lg rounded-lg h-full flex flex-col"
              >
                {/* User Info */}
                <section className="space-y-2 flex-grow">
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

                {/* Rental History Dropdown */}
                <section className="mt-4">
                  <label className="block font-semibold mb-2">
                    Previously Borrowed Books:{" "}
                    {rentalHistory.length === 0 ? (
                      " None"
                    ) : (
                      <span className="text-red-600">
                        {rentalHistory.length}
                      </span>
                    )}
                  </label>
                  <select className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed">
                    <option>Rented Books</option>
                    {rentalHistory.length > 0 ? (
                      rentalHistory.map((rental) => (
                        <option key={rental.rental_id} disabled>
                          {rental.book_title} (Rented on:{" "}
                          {new Date(rental.rent_date).toLocaleDateString()})
                        </option>
                      ))
                    ) : (
                      <option disabled>No rental history</option>
                    )}
                  </select>
                </section>

                {/* Buttons */}
                <section className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Button
                    className="w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 transition-all"
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

                  <Button
                    className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 transition-all"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </section>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="books">
          <section className="flex xs: flex-col sm:flex-row md:flex-row lg:flex-row sm:justify-between lg:justify-between md:justify-between items-center mb-4 gap-3 ">
            <h2 className="text-2xl font-semibold mb-4">All Books</h2>

            <section className="flex xs: flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
              <select
                name="genres"
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-600 focus:border-teal-600"
                id=""
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              <Button
                onClick={() => setIsAdding(!isadding)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md"
              >
                Add Book
              </Button>
            </section>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {books.map((book) => (
              <Card
                key={book.id}
                className="p-4 md:p-6 shadow-lg rounded-lg h-full flex flex-col"
              >
                {/* Book Info */}
                <section className="space-y-2 flex-grow">
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
                    <strong>Price:</strong> ${book.price}
                  </p>
                  <p>
                    <strong>Total Copies:</strong> {book.copies}
                  </p>
                  <p>
                    <strong>Available Copies:</strong> {book.available_copies}
                  </p>
                </section>

                {/* Buttons (Always at Bottom) */}
                <section className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-4">
                  <Button
                    className="bg-green-500 text-white hover:bg-green-600 transition-all w-full sm:w-auto"
                    variant="outline"
                    onClick={() => setRentOutBook({ ...book, userId: "" })}
                  >
                    Rent Out
                  </Button>

                  <Button
                    className="bg-blue-500 text-white hover:bg-blue-600 transition-all w-full sm:w-auto"
                    variant="outline"
                    onClick={() => setEditBook(book)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="destructive"
                    className="hover:bg-red-600 transition-all w-full sm:w-auto"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </Button>
                </section>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <Card key={book.id} className="p-4"></Card> */}

        <TabsContent value="rent">
          <h2 className="text-2xl font-semibold mb-4">Rented Books Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {rentals.map((rental) => (
              <Card key={rental.rental_id} className="p-4 flex flex-col">
                <section className="flex-grow">
                  <p>
                    <strong>Rental ID: </strong> {rental.rental_id}
                  </p>
                  <p>
                    <strong>Book ID: </strong> {rental.book_id}
                  </p>
                  <p>
                    <strong>Book Title: </strong> {rental.book_title}
                  </p>
                  <p>
                    <strong>User ID: </strong> {rental.customer_id}
                  </p>
                  <p>
                    <strong>Customer Name: </strong> {rental.customer_name}
                  </p>
                  <p>
                    <strong>Customer Phone: </strong> {rental.customer_phone}
                  </p>
                  <p>
                    <strong>Rent Date: </strong>{" "}
                    {rental.rent_date &&
                      new Date(rental.rent_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Return Date: </strong>
                    {rental.return_date
                      ? new Date(rental.return_date).toLocaleDateString()
                      : "Not yet returned"}
                  </p>
                  <p>
                    <strong>Returned: </strong>
                    {rental.returned ? (
                      <span className="text-green-600 font-bold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-bold">No</span>
                    )}
                  </p>
                </section>

                {/* Flex container for the button */}
                <section className="mt-auto">
                  <Button
                    className="mx-auto mt-4 w-full" // w-full ensures the button takes the full width of its container
                    onClick={() => setReturnBook(rental)}
                  >
                    Return Book
                  </Button>
                </section>
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
              min="1"
              value={editBook.price}
              onChange={(e) =>
                setEditBook({ ...editBook, price: e.target.value })
              }
              placeholder="Price"
            />
            <Input
              type="number"
              min="1"
              value={editBook.copies}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  copies: e.target.value,
                  id: editBook.id,
                })
              }
              placeholder="Total Copies"
            />
            <Button onClick={handleUpdateBook}>Update</Button>
          </DialogContent>
        </Dialog>
      )}

      {/* edit user */}
      {editUser && (
        <Dialog open={Boolean(editUser)} onOpenChange={() => setEditUser(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              placeholder="Name"
            />
            <Input
              type="text"
              value={editUser.phone}
              onChange={(e) =>
                setEditUser({ ...editUser, phone: e.target.value })
              }
              placeholder="Phone"
            />
            <select
              className="p-2 rounded"
              value={editUser.role}
              onChange={(e) =>
                setEditUser({ ...editUser, role: e.target.value })
              }
              name="role"
              id=""
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <Input
              type="text"
              value={editUser.newPassword}
              onChange={(e) =>
                setEditUser({ ...editUser, newPassword: e.target.value })
              }
              placeholder="Password"
            />

            <Button onClick={handleEditUser}>Update</Button>
          </DialogContent>
        </Dialog>
      )}

      {/* rent out Dialog */}
      {rentOutBook && (
        <Dialog
          open={Boolean(rentOutBook)}
          onOpenChange={() => setRentOutBook(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rent out</DialogTitle>
            </DialogHeader>
            <Input
              type="number"
              min="1"
              value={rentOutBook.id}
              onChange={(e) =>
                setRentOutBook({
                  ...rentOutBook,
                  id: e.target.value,
                })
              }
              placeholder="User ID"
            />
            <Input
              value={rentOutBook.title}
              onChange={(e) =>
                setRentOutBook({
                  ...rentOutBook,
                  title: e.target.value,
                })
              }
              placeholder="Title"
            />
            {/* take customer ID */}
            <Input
              type="number"
              min="1"
              value={rentOutBook.userId}
              onChange={(e) =>
                setRentOutBook({
                  ...rentOutBook,
                  userId: e.target.value,
                })
              }
              placeholder="Enter Customer ID"
            />
            <Button onClick={() => handleRentOutBook(rentOutBook)}>
              Rent Out
            </Button>
          </DialogContent>
        </Dialog>
      )}

      {/* return books */}

      {returnBook && (
        <Dialog
          open={Boolean(returnBook)}
          onOpenChange={() => setReturnBook(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Return Book</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              value={returnBook.book_title}
              placeholder="Title"
              readOnly
            />
            <Input
              type="number"
              value={returnBook.book_id}
              placeholder="Book ID"
              readOnly
            />
            <Input
              type="text"
              value={returnBook.customer_name}
              placeholder="Customer ID"
              readOnly
            />

            <Input
              type="number"
              value={returnBook.customer_id}
              placeholder="Customer ID"
              readOnly
            />

            <Button onClick={() => handleReturnBook(returnBook)}>
              Return Book
            </Button>
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
                setAddBook({ ...addBook, price: e.target.value })
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
