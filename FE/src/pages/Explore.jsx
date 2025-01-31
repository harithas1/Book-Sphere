import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"; // Import your custom Card component
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Explore = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Set loading state to true before fetching
        setLoading(true);

        // Fetch books based on selected genre
        const response = await axios.get(
          `https://book-sphere-1.onrender.com/books/${selectedGenre || "all"}`
        );
        console.log(response.data);

        // Set the books and genres data from the response
        setBooks(response.data.books);
        setGenres(response.data.genres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [selectedGenre]); // Fetch books when genre changes

  return (
    <div className="container mx-auto py-10 relative">
      {/* Home Button */}
      <Button
        className="mb-4 absolute top-4 right-4"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <h1 className="text-4xl font-bold text-center mb-8">Explore Books</h1>

      {/* Genre Dropdown */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-1/4"
        >
          <option value="all">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center">Loading books...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Display books or message if no books found */}
          {books.length > 0 ? (
            books.map((book) => {
              const {
                id,
                title,
                author,
                genre,
                price,
                available_copies,
                copies,
              } = book;
              return (
                <Card key={id} className="shadow-lg">
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{author}</p>
                    <CardDescription className="text-sm text-gray-500 mt-2">
                      Genre: {genre}
                    </CardDescription>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      ₹{price}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Available Copies: {available_copies}/{copies}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                      View Details
                    </button>
                  </CardFooter>
                </Card>
              );
            })
          ) : (
            <div className="col-span-3 text-center">
              No books found for this genre.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;
