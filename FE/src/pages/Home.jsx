import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

export const ResponsiveNavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="w-full p-4 bg-gray-900 text-white flex justify-between items-center border-b border-gray-700">
      {/* Logo and Mobile Menu Button */}
      <section className="flex justify-between items-center w-full p-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-wider text-white">
          <span>Book</span>
          <span className="text-teal-400">Sphere📚</span>
        </h1>

        {/* Mobile Menu Icon */}
        <AlignJustify
          className="text-white hover:text-teal-400 cursor-pointer transition-all md:hidden"
          onClick={() => setIsMobile(!isMobile)}
          size={32} // Adjust size for visibility
        />
      </section>

      {/* <div class="relative w-40 h-60 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg shadow-2xl hover:scale-105 transition-all">…</div> */}

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="absolute top-0 right-0 z-50 p-5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600 shadow-2xl md:hidden">
          <ul className="flex flex-col items-center gap-4 p-6">
            <li>
              <a
                href="#features"
                className="text-lg font-semibold hover:text-teal-400 transition"
                onClick={() => setIsMobile(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#books"
                className="text-lg font-semibold hover:text-teal-400 transition"
                onClick={() => setIsMobile(false)}
              >
                Books
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-semibold hover:text-teal-400 transition"
                onClick={() => setIsMobile(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-lg font-semibold hover:text-teal-400 transition"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="text-lg font-semibold hover:text-teal-400 transition"
                onClick={() => navigate("/register")}
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6">
          <li>
            <a href="#features" className="hover:text-teal-400 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#books" className="hover:text-teal-400 transition">
              Books
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </li>

          <li>
            <a
              className="text-lg font-semibold hover:text-teal-400 transition"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </li>
          <li>
            <a
              className="text-lg font-semibold hover:text-teal-400 transition"
              onClick={() => navigate("/register")}
            >
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      {/* Header Section */}
      {/* <header className="w-full py-6 px-6 border-b border-gray-700"> */}
      <ResponsiveNavBar />

      {/* Hero Section */}
      <section className="w-full py-10 px-6 flex flex-col items-center gap-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider leading-tight text-teal-400 text-center">
          Welcome to the World of Endless Knowledge
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Dive into our curated collection of books and explore infinite
          possibilities.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => navigate("/books")}
            className="px-10 py-4 bg-teal-400 text-gray-900 font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:bg-teal-300 transition-all"
          >
            Start Exploring
          </Button>
        </div>
      </section>

      {/* Book Shapes Section */}
      <section
        id="books"
        className="w-full py-20 px-6 flex flex-wrap justify-center gap-8"
      >
        {/* Book 1 */}
        <div className="relative w-40 h-60 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-lg shadow-2xl hover:scale-105 transition-all">
          <div className="absolute top-0 left-0 w-4 h-full bg-indigo-700 rounded-l-lg"></div>
          <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-gray-100">
            Fictional Tales
          </h3>
        </div>

        {/* Book 2 */}
        <div className="relative w-40 h-60 bg-gradient-to-br from-pink-600 to-pink-400 rounded-lg shadow-2xl hover:scale-105 transition-all">
          <div className="absolute top-0 left-0 w-4 h-full bg-pink-700 rounded-l-lg"></div>
          <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-gray-100">
            Mystery & Thriller
          </h3>
        </div>

        {/* Book 3 */}
        <div className="relative w-40 h-60 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg shadow-2xl hover:scale-105 transition-all">
          <div className="absolute top-0 left-0 w-4 h-full bg-emerald-700 rounded-l-lg"></div>
          <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-gray-100">
            Romance Reads
          </h3>
        </div>

        {/* Book 4 */}
        <div className="relative w-40 h-60 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg shadow-2xl hover:scale-105 transition-all">
          <div className="absolute top-0 left-0 w-4 h-full bg-orange-700 rounded-l-lg"></div>
          <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-gray-100">
            Self-Help
          </h3>
        </div>

        {/* Book 5 */}
        <div className="relative w-40 h-60 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-lg shadow-2xl hover:scale-105 transition-all">
          <div className="absolute top-0 left-0 w-4 h-full bg-cyan-700 rounded-l-lg"></div>
          <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-gray-100">
            Sci-Fi Adventures
          </h3>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full place-self-end bg-teal-400 py-16 px-6 text-center rounded-tl-[100px]">
        <h3 className="text-4xl font-bold text-gray-900">
          Join Our Book Lovers' Community
        </h3>
        <p className="mt-4 text-lg text-gray-800">
          Get exclusive deals, access to rare titles, and so much more!
        </p>
        <div className="mt-8">
          <Button
            onClick={() => navigate("/register")}
            className="px-10 py-4 bg-gray-900 text-teal-400 text-lg font-semibold rounded-full shadow-md hover:bg-gray-800 transition-all"
          >
            Become a Member
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            &copy; 2025 Haritha S. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
