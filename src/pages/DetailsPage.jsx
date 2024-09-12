import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Calendar, ThumbsUp, MessageSquare } from 'lucide-react';
import { Button, Card, CardContent, Badge, Avatar, AvatarFallback, AvatarImage } from '../component/ui/Ui';

// Mock data for demonstration
const movieDetails = {
  title: "Inception",
  type: "Movie",
  image: "https://i.postimg.cc/kGyCw8w0/img.jpg?height=600&width=400&text=Inception",
  rating: 8.8,
  year: 2010,
  duration: "2h 28min",
  genres: ["Action", "Adventure", "Sci-Fi"],
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  reviews: [
    { user: "MovieBuff", avatar: "MB", rating: 9, comment: "Mind-bending and visually stunning!" },
    { user: "CinemaFan", avatar: "CF", rating: 8, comment: "Complex plot but rewarding viewing experience." },
    { user: "FilmCritic", avatar: "FC", rating: 9, comment: "Nolan at his best. A true masterpiece." }
  ]
}

const DetailsPage = () => {
  const { title, type, image, rating, year, duration, genres, director, cast, synopsis, reviews } = movieDetails;

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => window.history.back()}
          className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          &larr; Back
        </Button>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <motion.img
              src={image}
              alt={title}
              className="w-full rounded-lg shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">{type}</Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="font-semibold">{rating}/10</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{year}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{duration}</span>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre, index) => (
                  <Badge key={index} variant="outline">{genre}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Director</h2>
              <p>{director}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Cast</h2>
              <ul className="list-disc list-inside">
                {cast.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
              <p>{synopsis}</p>
            </div>
            <Button className="bg-blue-500 text-white">Watch Now</Button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?text=${review.avatar}`} />
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{review.user}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{review.rating}/10</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <div className="flex items-center space-x-3 mt-3">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          Helpful
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailsPage;
