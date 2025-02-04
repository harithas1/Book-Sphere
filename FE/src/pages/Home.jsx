import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"; // Import Lucide icons

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";

// Genre List
const genres = [
  {
    name: "Romance",
    colorStart: "from-pink-600",
    colorEnd: "to-pink-400",
    leftBarColor: "bg-pink-700",
  },
  {
    name: "Mystery",
    colorStart: "from-blue-600",
    colorEnd: "to-blue-400",
    leftBarColor: "bg-blue-700",
  },
  {
    name: "Satire",
    colorStart: "from-yellow-600",
    colorEnd: "to-yellow-400",
    leftBarColor: "bg-yellow-700",
  },
  {
    name: "Fantasy",
    colorStart: "from-purple-600",
    colorEnd: "to-purple-400",
    leftBarColor: "bg-purple-700",
  },
  {
    name: "Dystopian",
    colorStart: "from-gray-600",
    colorEnd: "to-gray-400",
    leftBarColor: "bg-gray-700",
  },
  {
    name: "Non-fiction",
    colorStart: "from-green-600",
    colorEnd: "to-green-400",
    leftBarColor: "bg-green-700",
  },
  {
    name: "Crime",
    colorStart: "from-red-600",
    colorEnd: "to-red-400",
    leftBarColor: "bg-red-700",
  },
  {
    name: "Historical Fiction",
    colorStart: "from-teal-600",
    colorEnd: "to-teal-400",
    leftBarColor: "bg-teal-700",
  },
  {
    name: "Philosophical Fiction",
    colorStart: "from-indigo-500",
    colorEnd: "to-indigo-300",
    leftBarColor: "bg-indigo-700",
  },
  {
    name: "Science Fiction",
    colorStart: "from-blue-600",
    colorEnd: "to-blue-400",
    leftBarColor: "bg-blue-700",
  },
  {
    name: "Post-apocalyptic",
    colorStart: "from-teal-600",
    colorEnd: "to-teal-400",
    leftBarColor: "bg-teal-700",
  },
  {
    name: "Self-help",
    colorStart: "from-yellow-600",
    colorEnd: "to-yellow-400",
    leftBarColor: "bg-yellow-700",
  },
  {
    name: "Philosophy",
    colorStart: "from-green-600",
    colorEnd: "to-green-400",
    leftBarColor: "bg-green-700",
  },
  {
    name: "Horror",
    colorStart: "from-red-600",
    colorEnd: "to-red-400",
    leftBarColor: "bg-red-700",
  },
  {
    name: "Biography",
    colorStart: "from-rose-600",
    colorEnd: "to-rose-400",
    leftBarColor: "bg-rose-700",
  },
  {
    name: "Classic",
    colorStart: "from-indigo-600",
    colorEnd: "to-indigo-400",
    leftBarColor: "bg-indigo-700",
  },
  {
    name: "Gothic Fiction",
    colorStart: "from-purple-600",
    colorEnd: "to-purple-400",
    leftBarColor: "bg-purple-700",
  },
  {
    name: "Memoir",
    colorStart: "from-gray-600",
    colorEnd: "to-gray-400",
    leftBarColor: "bg-gray-700",
  },
  {
    name: "Thriller",
    colorStart: "from-orange-600",
    colorEnd: "to-orange-400",
    leftBarColor: "bg-orange-700",
  },
  {
    name: "Fiction",
    colorStart: "from-cyan-600",
    colorEnd: "to-cyan-400",
    leftBarColor: "bg-cyan-700",
  },
  {
    name: "Adventure",
    colorStart: "from-teal-600",
    colorEnd: "to-teal-400",
    leftBarColor: "bg-teal-700",
  },
  {
    name: "Children's Fiction",
    colorStart: "from-yellow-600",
    colorEnd: "to-yellow-400",
    leftBarColor: "bg-yellow-700",
  },
  {
    name: "Young Adult",
    colorStart: "from-purple-600",
    colorEnd: "to-purple-400",
    leftBarColor: "bg-purple-700",
  },
  {
    name: "Psychological Fiction",
    colorStart: "from-indigo-500",
    colorEnd: "to-indigo-300",
    leftBarColor: "bg-indigo-700",
  },
  {
    name: "Philosophical",
    colorStart: "from-blue-600",
    colorEnd: "to-blue-400",
    leftBarColor: "bg-blue-700",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(""); // success or error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("");

    try {
      const response = await axios.post(
        "https://book-sphere-1.onrender.com/contact",
        formData
      ); // Replace with your API endpoint
      console.log(response.data);
      setFormStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
            possibilities. Get exclusive deals, access to rare titles, and so
            much more!
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              onClick={() => navigate("/register")}
              className="px-10 py-4 bg-teal-400 text-gray-900 font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:bg-teal-300 transition-all"
            >
              Become a Member
            </Button>
          </div>
        </section>
        {/* Books Section */}
        <section
          id="books"
          className="w-full py-20 px-4 flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Explore a World of Diverse Book Genres
          </h2>

          <div className="relative w-full max-w-5xl">
            <Carousel className="w-full">
              <CarouselContent className="flex gap-4">
                {genres.map((genre, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-grow sm: basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex justify-center"
                    onClick={() => navigate("/register")}
                  >
                    <div
                      className={`relative w-36 h-56 sm:w-40 sm:h-60 bg-gradient-to-br ${genre.colorStart} ${genre.colorEnd} rounded-lg shadow-2xl cursor-default`}
                    >
                      {/* Left bar with solid color */}
                      <div
                        className={`absolute top-0 left-0 w-4 h-full ${genre.leftBarColor} rounded-l-lg`}
                      ></div>

                      {/* Genre Name */}
                      <h3 className="absolute bottom-8 left-6 text-lg font-semibold text-gray-100">
                        {genre.name}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons - Always Visible */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 transition" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 transition" />
            </Carousel>
          </div>
        </section>

        {/* Call to Action */}

        <section
          id="contact"
          className="w-full bg-gray-900 py-16 px-6 text-center rounded-tl-[100px]"
        >
          <h3 className="text-4xl font-bold text-teal-400 mb-6">
            Get in Touch with Us
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Have any questions or need assistance? Reach out to us and we'll get
            back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Right Part: Contact Information */}
            <div className="flex flex-col justify-center text-center bg-gray-800 p-8 rounded-lg shadow-lg border gap-4 border-gray-700">
              <h4 className="text-3xl font-semibold text-teal-400 mb-4">
                Contact Information
              </h4>

              {/* Contact Details */}
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-teal-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200">
                      Email
                    </h5>
                    <p className="text-gray-400">contact@booksphere.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-teal-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200">
                      Phone
                    </h5>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-6 text-3xl mb-8">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition"
                >
                  <Linkedin />
                </a>
              </div>

              {/* Office Location */}
              <div>
                <h4 className="text-3xl font-semibold text-teal-400 mb-4">
                  Our Office Location
                </h4>
                <p className="text-lg text-gray-300 mb-4">
                  Visit us at our office for any in-person queries.
                </p>
                <p className="text-lg text-gray-400">
                  123 Book Sphere Lakkanapalli, Chittoor, 12345
                </p>
              </div>
            </div>

            {/* Left Part: Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h4 className="text-3xl font-semibold text-teal-400 mb-6">
                Contact Form
              </h4>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-100 font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-900 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-100 font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-900 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg text-gray-100 font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-900 text-white"
                  ></textarea>
                </div>

                {formStatus && (
                  <div
                    className={`text-lg ${
                      formStatus.includes("success")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {formStatus}
                  </div>
                )}

                <div className="mt-6 flex justify-center">
                  <Button
                    type="submit"
                    className="px-10 py-4 bg-teal-400 text-gray-900 text-lg font-semibold rounded-full shadow-md hover:bg-teal-300 transition-all"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
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
