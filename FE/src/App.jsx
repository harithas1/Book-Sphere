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

  // Check for token on component mount
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
      <div className="flex justify-between">
        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-white text-lg">
          <Link
            to="/"
            className="hover:text-indigo-200 transition-colors duration-200"
          ></Link>

          {/* Only show login/register when not authenticated */}
          {!token && (
            <>
              <Link
                to="/login"
                className="hover:text-indigo-200 transition-colors duration-200"
              ></Link>
              <Link
                to="/register"
                className="hover:text-indigo-200 transition-colors duration-200"
              ></Link>
            </>
          )}

          {/* Admin and User routes */}
          {role === "admin" && (
            <Link
              to={`/admin/${id}`}
              className="hover:text-indigo-200 transition-colors duration-200"
            >
              {/* Admin */}
            </Link>
          )}

          {role === "user" && id && (
            <Link
              to={`/user/${id}`}
              className="hover:text-indigo-200 transition-colors duration-200"
            >
              {/* User Dashboard */}
            </Link>
          )}

          {/* Logout button */}
          {/* {role && token && <button onClick={logout}>Logout</button>} */}
        </div>
      </div>

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
          path={`/admin/:id`}
          element={
            role === "admin" && token ? (
              <Admin token={token} role={role} id={id} />
            ) : (
              <div className="text-red-500 text-center mt-20">
                Access Denied. Please log in again.
              </div>
            )
          }
        />

        {/* User Protected Route */}
        <Route
          path={`/user/:id`}
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
