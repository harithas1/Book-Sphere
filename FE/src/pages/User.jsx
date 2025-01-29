import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const User = ({ token, role, id }) => {
  const [userData, setUserData] = useState(null);
  const [history, setHistory] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("details");
  const [isRenting, setIsRenting] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  // Fetch user data when the component mounts
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's rental history
  const fetchUserHistory = async () => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/user/${id}/rentals`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHistory(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch available books for rent
  const fetchAvailableBooks = async (genre) => {
    try {
      const response = await axios.get(
        `https://book-sphere-1.onrender.com/user/${id}/books/${genre}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.books);

      setAvailableBooks(response.data.books);
      setSelectedCategory(response.data.genres)
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRentBook = async (bookId) => {
    setIsRenting((prevState) => ({ ...prevState, [bookId]: true }));

    try {
      await axios.post(
        `https://book-sphere-1.onrender.com/user/${id}/rentbook`,
        { bookId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Book borrowed successfully!");
      fetchAvailableBooks(selectedCategory);
      fetchUserHistory();
    } catch (err) {
      setError(err.message);
    } finally {
    setIsRenting((prevState) => ({ ...prevState, [bookId]: false }));
    }
  };

  // useEffect to fetch data on mount
  useEffect(() => {
    if (token && id) {
      setLoading(true);
      const fetchData = async () => {
        try {
          await fetchUserData(); // First fetch the user data
          await fetchUserHistory(); // Then fetch the rental history
          await fetchAvailableBooks(selectedCategory); // Finally fetch available books
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [token, id, selectedCategory]);


  const handleLogout = () => {
    // Clear user-specific data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");

    // Optionally, clear any user-specific state here (if you use state to store these values)

    // Redirect to the homepage or login page
    navigate("/");
  };




  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle errors
  if (error) {
    return <div>Error: {error}</div>;
  }

  const getTabClassName = (tabName) => {
    return activeTab === tabName
      ? "border-b-2 border-blue-500 px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600"
      : "px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600";
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome <span className="text-teal-500">{userData.name}!</span>
        </h1>
        <Button variant="destructive" onClick={handleLogout}>
          logout
        </Button>
      </section>
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab("details")}
          className={getTabClassName("details")}
        >
          User Details
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={getTabClassName("history")}
        >
          Rental History
        </button>
        <button
          onClick={() => setActiveTab("rent")}
          className={getTabClassName("rent")}
        >
          Rent Books
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-2xl font-bold mb-4">User Details</h1>
          {userData ? (
            <>
              <p className="mb-2">
                <strong>Name:</strong> {userData.name}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {userData.phone}
              </p>
              <p className="mb-2">
                <strong>Role:</strong> {role}
              </p>
              {/* format the date */}
              <p className="mb-2">
                <strong> Member Since: </strong>
                {new Date(userData.created_at).toLocaleDateString()}
              </p>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      )}

      {activeTab === "history" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Rental History</h2>
          {history.length > 0 ? (
            <ul className="space-y-4">
              {history.map((rental) => (
                <li
                  key={rental.rental_id}
                  className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
                >
                  <p className="font-semibold text-gray-700">
                    Book Title: {rental.book_title}
                  </p>
                  <p>
                    Rent Date: {new Date(rental.rent_date).toLocaleDateString()}
                  </p>
                  <p>
                    Return Date:{" "}
                    {rental.return_date
                      ? new Date(rental.return_date).toLocaleDateString()
                      : "Not returned"}
                  </p>
                  <p>Returned: {`${rental.returned}`}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No rental history.</p>
          )}
        </div>
      )}

      {activeTab === "rent" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <section className="mb-6 flex justify-between gap-4">
            <h2 className="text-2xl block font-bold mb-4">Borrow a Book</h2>
            {/* filter based on categories */}
            {/* "Poetry" "Novel" "Drama" "Autobiography" "Epic" "Novel" "Fiction"
            "Historical" "Fantasy" "Fantasy" "Historical Fiction" "Historical
            Fiction" "Historical Fiction" "Novel" "Science Fiction" "Science
            Fiction" "Science Fiction" "Thriller" "Thriller" */}
            
          </section>
          {availableBooks.length > 0 ? (
            <ul className="space-y-4">
              {availableBooks.map((book) => (
                <li
                  key={book.id}
                  className="flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg bg-green-100"
                >
                  <p>
                    Book ID:{" "}
                    <span className="font-bold text-fuchsia-500">
                      {book.id}
                    </span>
                  </p>
                  <p>Book Title: {book.title}</p>
                  <p>Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Available Copies: {book.available_copies}</p>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    onClick={() => handleRentBook(book.id)}
                    disabled={isRenting[book.id]} // Disable while renting
                  >
                    {isRenting[book.id] ? "Borrowing..." : "Borrow"}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No available books.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
