import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  const [token, setToken] = useState(""); // Token state for authentication
  const [role, setRole] = useState(""); // Role state (user/admin)
  const [id, setId] = useState(""); // User ID for personalized access
  const [activeTab, setActiveTab] = useState("details");

  const logout = () => {
    // Clear authentication state on logout
    setToken("");
    setRole("");
    setId("");

    // Also clear from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
  };

  // Load from localStorage on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedId = localStorage.getItem("id");

    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole);
      setId(storedId);
    }
  }, []);

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="text-white text-2xl font-extrabold"></div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-white text-lg">
            <Link
              to="/"
              className="hover:text-indigo-200 transition-colors duration-200"
            >
              Home
            </Link>

            {/* Only show login/register when not authenticated */}
            {!token && (
              <>
                <Link
                  to="/login"
                  className="hover:text-indigo-200 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:text-indigo-200 transition-colors duration-200"
                >
                  Register
                </Link>
              </>
            )}

            {/* Admin and User routes */}
            {role === "admin" && (
              <Link
                to="/admin"
                className="hover:text-indigo-200 transition-colors duration-200"
              >
                Admin
              </Link>
            )}

            {role === "user" && id && (
              <Link
                to={`/user/${id}`}
                className="hover:text-indigo-200 transition-colors duration-200"
              >
                User Dashboard
              </Link>
            )}

            {/* Logout button */}
            {role && token && (
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-lg transition-colors duration-300"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login setRole={setRole} setToken={setToken} setId={setId} />
          }
        />

        {/* Admin Protected Route */}
        <Route
          path="/admin"
          element={
            role === "admin" && token ? (
              <Admin token={token} role={role} id={id} />
            ) : (
              <div className="text-red-500 text-center mt-20">
                Access Denied. Please log in as an admin.
              </div>
            )
          }
        />

        {/* User Protected Route */}
        <Route
          path={`/user/${id}`}
          element={
            role === "user" && token && id ? (
              <User token={token} role={role} id={id} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Fallback for Undefined Routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
