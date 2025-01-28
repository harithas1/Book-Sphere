import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setRole, setToken, setId }) {
  const [form, setForm] = useState({
    name: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Login User
  // app.post("/login", async (req, res) => {
  //   const loginSchema = Joi.object({
  //     name: Joi.string().required(),
  //     password: Joi.string().required(),
  //     role: Joi.string().valid("user", "admin").required(),
  //   });

  //   const { error } = loginSchema.validate(req.body);
  //   if (error) {
  //     return res.status(400).json({ error: error.details[0].message });
  //   }

  //   const { name, password, role } = req.body;
  //   try {
  //     const result = await pool.query(
  //       "SELECT * FROM customers WHERE name = $1",
  //       [name]
  //     );
  //     if (result.rows.length === 0) {
  //       return res.status(401).json({ error: "Invalid credentials" });
  //     }

  //     const user = result.rows[0];
  //     const passwordMatch = await bcrypt.compare(password, user.password);
  //     if (!passwordMatch) {
  //       return res.status(401).json({ error: "Invalid credentials" });
  //     }

  //     if (user.role !== role) {
  //       return res.status(403).json({ error: "Access denied for this role" });
  //     }

  //     const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
  //       expiresIn: JWT_EXPIRES,
  //     });

  //     res.json({
  //       token,
  //       user: {
  //         id: user.id,
  //         name: user.name,
  //         phone: user.phone,
  //         role: user.role,
  //       },
  //     });
  //   } catch (err) {
  //     console.error("Error during login:", err.message);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    if (!form.name || !form.password) {
      setError("All fields are required!");
      return;
    }

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
      setToken(response.data.token);
      setRole(response.data.user.role);
      setId(response.data.user.id);

      // Save to localStorage (secure handling if possible)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);
      localStorage.setItem("id", response.data.user.id);

      // Navigate to the appropriate page
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate(`/user/${response.data.user.id}`);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong! Please try again."
      );
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
            Login
          </button>
          <a className="text-white" href="/register">
            Register
          </a>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </section>
    </div>
  );
}
