import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
import { LogOut } from "lucide-react";


const User = ({ token, role, id }) => {
  const [userData, setUserData] = useState(null);
  const [history, setHistory] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [allGenres, setAllGenres] = useState(["all"]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  const navigate = useNavigate();

  // Redirect if token exists
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedId = localStorage.getItem("id");

    if (storedToken) {
      navigate(`/${storedRole}/${storedId}`);
    }
  }, [navigate]);

  // Fetch Profile and rental history
  useEffect(() => {
    if (!token || !id) return;
    setLoading(true);
    Promise.all([
      axios.get(`https://book-sphere-1.onrender.com/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      axios.get(`https://book-sphere-1.onrender.com/user/${id}/rentals`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ])
      .then(([userRes, historyRes]) => {
        setUserData(userRes.data);
        setHistory(historyRes.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, id]);

  // like a book
  const handleLike = async (bookId) => {
    // try {
    //   await axios.post(
    //     `https://book-sphere-1.onrender.com/user/${id}/like/${bookId}`,
    //     {},
    //     { headers: { Authorization: `Bearer ${token}` } }
    //   );
    //   alert("Book liked successfully!");
    // } catch (err) {
    //   console.error(err);
    //   alert("Failed to like book.");
    // }
  };

  // Fetch available books based on genre
  useEffect(() => {
    if (!token || !id) return;
    setLoading(true);
    axios
      .get(
        `https://book-sphere-1.onrender.com/user/${id}/books/${selectedGenre}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setAvailableBooks(response.data.books);
        setAllGenres(["all", ...response.data.genres]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, id, selectedGenre]);

  // Logout function
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // Tab class management
  const getTabClassName = (tabName) =>
    activeTab === tabName
      ? "border-b-2 border-blue-500 px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600"
      : "px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Hello <span className="text-teal-500">{userData?.name}!</span>
      </h1>

      {/* Tab Navigation */}
      <div className="flex border-b-2 border-gray-300 mb-6">
        {["details", "history", "rent"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={getTabClassName(tab)}
          >
            {tab === "details"
              ? "Profile"
              : tab === "history"
              ? "Rental History"
              : "View Available Books"}
          </button>
        ))}
      </div>

      {/* Profile */}
      {activeTab === "details" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 space-y-2">
          <h2 className="text-2xl font-bold">Your Profile</h2>
          <p>
            <strong>Name:</strong> {userData?.name}
          </p>
          <p>
            <strong>Phone:</strong> {userData?.phone}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>Member Since:</strong>{" "}
            {userData?.created_at
              ? new Date(userData.created_at).toLocaleDateString()
              : "N/A"}
          </p>
          <section className="flex gap-4 mt-4">
            <Button onClick={() => navigate("/")}>Go to Home</Button>
            <Button variant="destructive" onClick={logout}>
              Logout <LogOut color="#ffffff" />
            </Button>
          </section>
        </div>
      )}

      {/* Rental History */}
      {activeTab === "history" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold">Rental History</h2>
          {history.length ? (
            <ul className="space-y-4">
              {history.map(
                ({
                  rental_id,
                  book_title,
                  rent_date,
                  return_date,
                  returned,
                }) => (
                  <li
                    key={rental_id}
                    className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
                  >
                    <p className="font-semibold text-gray-700">
                      Book Title: {book_title}
                    </p>
                    <p>Rent Date: {new Date(rent_date).toLocaleDateString()}</p>
                    <p>
                      Return Date:{" "}
                      {return_date
                        ? new Date(return_date).toLocaleDateString()
                        : "Not returned"}
                    </p>
                    <p>Returned: {`${returned}`}</p>
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>No rental history.</p>
          )}
        </div>
      )}

      {/* Available Books */}
      {activeTab === "rent" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <section className="mb-6 flex md:flex-row lg:flex-row justify-between sm: flex-col gap-4">
            <h2 className="text-2xl font-bold">Available Books</h2>
            <select
              className="p-2 border rounded-md bg-white text-gray-900"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {allGenres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </section>
          {availableBooks.length ? (
            <ul className="space-y-4">
              {availableBooks.map(
                ({ id, title, author, genre, available_copies }) => (
                  <section key={id} className="relative">
                    <li
                      key={id}
                      className="p-4 border-2 border-gray-300 rounded-lg bg-green-100"
                    >
                      <p>
                        <strong>Title:</strong> {title}
                      </p>
                      <p>
                        <strong>Author:</strong> {author}
                      </p>
                      <p>
                        <strong>Genre:</strong> {genre}
                      </p>
                      <p>
                        <strong>Available Copies:</strong> {available_copies}
                      </p>
                    </li>
                    <Heart
                      onClick={() => handleLike(id)}
                      size={32}
                      color="#000000"
                      className="absolute top-2 right-2 cursor-pointer"
                    />
                  </section>
                )
              )}
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
