import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlignJustify } from "lucide-react";

// Genre List
const genres = [
  {
    name: "Science Fiction",
    colorStart: "from-blue-600",
    colorEnd: "to-blue-400",
    leftBarColor: "bg-blue-700",
  },
  {
    name: "Historical Fiction",
    colorStart: "from-teal-600",
    colorEnd: "to-teal-400",
    leftBarColor: "bg-teal-700",
  },
  {
    name: "Self-Help",
    colorStart: "from-yellow-600",
    colorEnd: "to-yellow-400",
    leftBarColor: "bg-yellow-700",
  },
  {
    name: "Drama",
    colorStart: "from-red-600",
    colorEnd: "to-red-400",
    leftBarColor: "bg-red-700",
  },
  {
    name: "Poetry",
    colorStart: "from-purple-600",
    colorEnd: "to-purple-400",
    leftBarColor: "bg-purple-700",
  },
  {
    name: "Novel",
    colorStart: "from-indigo-500",
    colorEnd: "to-indigo-300",
    leftBarColor: "bg-indigo-700",
  },
  {
    name: "Thriller",
    colorStart: "from-orange-600",
    colorEnd: "to-orange-400",
    leftBarColor: "bg-orange-700",
  },
  {
    name: "Fantasy",
    colorStart: "from-pink-600",
    colorEnd: "to-pink-400",
    leftBarColor: "bg-pink-700",
  },
  {
    name: "Historical",
    colorStart: "from-green-600",
    colorEnd: "to-green-400",
    leftBarColor: "bg-green-700",
  },
  {
    name: "Epic",
    colorStart: "from-lime-600",
    colorEnd: "to-lime-400",
    leftBarColor: "bg-lime-700",
  },
  {
    name: "Fiction",
    colorStart: "from-cyan-600",
    colorEnd: "to-cyan-400",
    leftBarColor: "bg-cyan-700",
  },
  {
    name: "Autobiography",
    colorStart: "from-rose-600",
    colorEnd: "to-rose-400",
    leftBarColor: "bg-rose-700",
  },
];


// Responsive Navbar Component
export const ResponsiveNavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();


  return (
    <header className="w-full p-4 bg-gray-900 text-white flex justify-between items-center border-b border-gray-700">
      {/* Logo and Mobile Menu Button */}
      <section className="flex justify-between items-center w-full p-4">
        <h1 className="text-4xl font-bold tracking-wider text-white">
          <span>Book</span>
          <span className="text-teal-400">Sphere📚</span>
        </h1>

        {/* Mobile Menu Icon */}
        <AlignJustify
          className="text-white hover:text-teal-400 cursor-pointer transition-all md:hidden"
          onClick={() => setIsMobile(!isMobile)}
          size={32}
        />
      </section>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="absolute top-20 right-10 z-50 p-5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600 shadow-2xl md:hidden">
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
                className="text-lg font-semibold hover:text-teal-400 transition cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="text-lg font-semibold hover:text-teal-400 transition cursor-pointer"
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
              className="hover:text-teal-400 transition cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </li>
          <li>
            <a
              className="hover:text-teal-400 transition cursor-pointer"
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

// Home Page Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navbar */}
      <ResponsiveNavBar />

      {/* Main Content (Expands to push footer down) */}
      <main className="flex-grow flex flex-col items-center">
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

        {/* Books Section */}
        <section
          id="books"
          className="w-full py-20 px-6 flex flex-wrap justify-center gap-8"
        >
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`relative w-40 h-60 bg-gradient-to-br ${genre.colorStart} ${genre.colorEnd} rounded-lg shadow-2xl hover:scale-105 transition-all`}
            >
              {/* Left bar with solid color */}
              <div
                className={`absolute top-0 left-0 w-4 h-full ${genre.leftBarColor} rounded-l-lg`}
              ></div>
              {/* Genre Name */}
              <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-gray-100">
                {genre.name}
              </h3>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="w-full bg-teal-400 py-16 px-6 text-center rounded-tl-[100px]">
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
      </main>

      {/* Footer Stays at Bottom */}
      <footer className="w-full bg-gray-800 py-8 text-center mt-auto">
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
