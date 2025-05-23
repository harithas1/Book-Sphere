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
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage submit state
  const navigate = useNavigate();

  // Password validation regex
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Password validation function
  const validatePassword = () => {
    const { password } = form;

    if (!passwordPattern.test(password)) {
      return "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long.";
    }

    return ""; // No error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform password validation
    const passwordValidationError = validatePassword();
    if (passwordValidationError) {
      setPasswordError(passwordValidationError); // Set error message
      return; // Stop form submission if password validation fails
    }

    setPasswordError(""); // Clear any previous password errors
    setIsSubmitting(true); // Disable the submit button

    try {
      const response = await axios.post(
        "https://book-sphere-1.onrender.com/register",
        form
      );
      console.log("Registration successful:", response.data);
      setMessage("Registration successful!");
      setIsSubmitting(false); // Re-enable the submit button
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong!");
      setIsSubmitting(false); // Re-enable the submit button in case of an error
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 h-screen">
      <section className="text-sky-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col border border-teal-800 bg-opacity-20 backdrop-blur-sm bg-gray-800 gap-4 p-10 place-items-center rounded-2xl">
        <form
          className="flex flex-col gap-8 items-center text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            className="p-2 rounded-md"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <select
            className="p-2 rounded-md w-full"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            className="bg-red-600 p-3 text-white rounded-lg"
            type="submit"
            disabled={isSubmitting} // Disable the button while submitting
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <button
            className="text-white cursor-pointer hover:text-teal-700"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          {/* Display password error if any */}
          {passwordError && <p className="text-red-500">{passwordError}</p>}

          {/* Display general message */}
          {message && <p className="text-teal-500">{message}</p>}
        </form>
      </section>
    </div>
  );
}
