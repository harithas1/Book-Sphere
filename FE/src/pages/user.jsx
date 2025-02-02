import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LogOut } from "lucide-react";

const User = ({ token, role, id }) => {
  const [userData, setUserData] = useState(null);
  const [history, setHistory] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [allFilters, setAllFilters] = useState(["all"]);
  const [allLanguages, setAllLanguages] = useState(["all"]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedId = localStorage.getItem("id");

    if (storedToken) {
      navigate(`/${storedRole}/${storedId}`);
    }
  }, [navigate]);

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
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token, id]);

  // Fetch available books based on book_type and language filters
  useEffect(() => {
    if (!token || !id) return;
    setLoading(true);

    axios
      .get(
        `https://book-sphere-1.onrender.com/user/${id}/books/${selectedFilter}?language=${selectedLanguage}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setAvailableBooks(response.data.books);
        setAllFilters(["all", ...response.data.filters]);
        setAllLanguages(["all", ...response.data.languages]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token, id, selectedFilter, selectedLanguage]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getTabClassName = (tabName) =>
    activeTab === tabName
      ? "border-b-2 border-blue-500 px-6 py-3 text-lg text-gray-700"
      : "px-6 py-3 text-lg text-gray-700 hover:text-blue-600";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Hello <span className="text-teal-500">{userData?.name}!</span>
      </h1>

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

      {activeTab === "rent" && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <section className="mb-6 flex justify-between gap-4">
            <h2 className="text-2xl font-bold">Available Books</h2>
            <div className="flex gap-4">
              <select
                className="p-2 border rounded-md"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {allFilters.map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
              <select
                className="p-2 border rounded-md"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {allLanguages.map((lang, index) => (
                  <option key={index} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {availableBooks.length ? (
            <ul className="space-y-4">
              {availableBooks.map(
                ({
                  id,
                  title,
                  author,
                  book_type,
                  language,
                  reading_level,
                  theme,
                  price,
                  available_copies,
                }) => (
                  <li key={id} className="p-4 border rounded-lg bg-green-100">
                    <p>
                      <strong>Title:</strong> {title}
                    </p>
                    <p>
                      <strong>Author:</strong> {author}
                    </p>
                    <p>
                      <strong>Type:</strong> {book_type}
                    </p>
                    <p>
                      <strong>Language:</strong> {language}
                    </p>
                    <p>
                      <strong>Reading Level:</strong> {reading_level}
                    </p>
                    <p>
                      <strong>Theme:</strong> {theme}
                    </p>
                    <p>
                      <strong>Price:</strong> ₹{price}
                    </p>
                    <p>
                      <strong>Available Copies:</strong> {available_copies}
                    </p>
                  </li>
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
