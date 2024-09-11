import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/button";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";

const upcomingMovies = [
  { id: 1, title: "Interstellar 2", releaseDate: "2024-06-15", imageUrl: "https://i.postimg.cc/kGyCw8w0/img.jpg?height=400&width=300" },
  { id: 2, title: "The Matrix Resurrections 2", releaseDate: "2024-07-01", imageUrl: "https://i.postimg.cc/kGyCw8w0/img.jpg?height=400&width=300" },
  { id: 3, title: "Inception: Dream's End", releaseDate: "2024-08-20", imageUrl: "https://i.postimg.cc/kGyCw8w0/img.jpg?height=400&width=300" },
  { id: 4, title: "Avatar 3", releaseDate: "2024-09-10", imageUrl: "/placeholder.svg?height=400&width=300" },
  { id: 5, title: "Dune: Part Three", releaseDate: "2024-10-05", imageUrl: "/placeholder.svg?height=400&width=300" },
];

export default function UpcomingMoviesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingMovies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + upcomingMovies.length) % upcomingMovies.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Movies</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {upcomingMovies.map((movie) => (
              <Card key={movie.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2 relative group">
                <CardContent className="transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-lg relative">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-500">Release Date: {movie.releaseDate}</p>

                  {/* Motion View Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Button className="bg-white text-black px-4 py-2">View</Button>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
