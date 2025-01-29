import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    role: "user",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://book-sphere-1.onrender.com/register",
        form
      );
      console.log("Registration successful:", response.data);
      setMessage("Registration successful!");
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="bg-[url('../src/assets/bookloginbg.avif')] bg-cover h-screen">
      <section className="text-sky-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col border border-cyan-800 bg-opacity-20 backdrop-blur-sm bg-purple-800 gap-4 p-10 place-items-center rounded-2xl">
        <form
          className="flex flex-col gap-8 items-center text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 "
            type="text"
            placeholder="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="p-2"
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            className="p-2"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {/* <input
          className="p-2"
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          required
        /> */}
          <select
            className="p-2 w-full"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

          <button
            className="bg-red-600 p-3 text-white rounded-lg"
            type="submit"
          >
            Register
          </button>
          <button
            className="text-white hover:text-blue-700"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          {message && <p className="text-red-500">{message}</p>}
        </form>
      </section>
    </div>
  );
}
