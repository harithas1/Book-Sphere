import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setRole, setToken, setId }) {
  const [form, setForm] = useState({
    name: "",
    password: "",
    role: "user",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    if (!form.name || !form.password) {
      setError("All fields are required!");
      return;
    }
    setIsLoggingIn(true);

    try {
      console.log("trying..");

      const response = await axios.post(
        "https://book-sphere-1.onrender.com/login",
        // upload data in json format
        {
          name: form.name,
          password: form.password,
          role: form.role,
        }
      );

      console.log("Login successful:", response.data);
      setError("");
      setIsLoggingIn(false);

      setToken(response.data.token);
      setRole(response.data.user.role);
      setId(response.data.user.id);

      // Save to localStorage (secure handling if possible)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);
      localStorage.setItem("id", response.data.user.id);

      // Navigate to the appropriate page
      if (response.data.user.role === "admin") {
        navigate(`/admin/${response.data.user.id}`);
      } else {
        navigate(`/user/${response.data.user.id}`);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong! Please try again."
      );
    }
  };

  // if there are details in the local storage again redirect to that page

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role") === "admin") {
        navigate(`/admin/${localStorage.getItem("id")}`);
      } else {
        navigate(`/user/${localStorage.getItem("id")}`);
      }
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 h-screen">
      <section className="text-sky-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col border border-teal-800 bg-opacity-20 backdrop-blur-sm bg-gray-800 gap-4 p-10 place-items-center rounded-2xl">
        <form
          className="flex flex-col gap-8 items-center text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 rounded-lg"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="p-2 rounded-lg"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <select
            className="p-2 rounded-lg w-full"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="bg-red-500 text-white p-3 font-bold rounded-lg"
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
          <a className="text-white cursor-pointer hover:text-teal-700" onClick={() => navigate("/register")}>
            Register
          </a>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </section>
    </div>
  );
}
