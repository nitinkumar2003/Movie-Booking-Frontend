import React from 'react';
import { useParams } from 'react-router-dom';  // React Router DOM
import { Star, Clock, Calendar, ThumbsUp, MessageSquare } from 'lucide-react';
import { Button, Badge, Avatar, AvatarFallback, AvatarImage, Card, CardContent } from '../component/ui/Ui';  // Adjust path as necessary
import Layout from '../component/Layout/Layout';
import usePush from '../hooks/usePush';

const movieData = [
  {
    "rank": 32,
    "title": "Inception",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.8",
    "id": "top32",
    "year": 2010,
    "imdbid": "tt1375666",
    "imdb_link": "https://www.imdb.com/title/tt1375666",
    "director": "Christopher Nolan",
    "cast": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page"
    ],
    "reviews": [
      { user: "MovieBuff", avatar: "MB", rating: 9, comment: "Mind-bending and visually stunning!" },
      { user: "CinemaFan", avatar: "CF", rating: 8, comment: "Complex plot but rewarding viewing experience." },
      { user: "FilmCritic", avatar: "FC", rating: 9, comment: "Nolan at his best. A true masterpiece." }
    ]
  }
  // Add other movies here if needed
];

const MovieDetailsPage = () => {

  const push=usePush();
  const { id } = useParams();  // Get the movie ID from the route
  // const movie = movieData.find(movie => movie.id === id);
  const movie = movieData[0]

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, image, rating, year, genre, description, big_image, imdb_link, director, cast, reviews } = movie;

  return (
    <Layout id='2'>
      <div className="container mx-auto px-4 py-8">
        <Button as="a" href="/" className="mb-4" onClick={()=>push('/t100')}>Back</Button>  {/* Button to go back to the previous page */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img src={big_image} alt={title} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <Badge variant="secondary">Movie</Badge>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">{rating}/10</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {genre.map((g, index) => (
                <Badge key={index} variant="outline">{g}</Badge>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{year}</span>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 mr-2" />
              <span>2h 28min</span>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Director</h2>
              <p>{director}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <ul className="list-disc list-inside">
                {cast.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p>{description}</p>
            </div>
            <Button as="a" href={imdb_link} target="_blank">View on IMDb</Button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?text=${review.avatar}`} />
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{review.user}</h3>
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-1" />
                          <span>{review.rating}/10</span>
                        </div>
                      </div>
                      <p className="mt-2 text-muted-foreground">{review.comment}</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Helpful
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
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
      </div>
    </Layout>
  );
};

export default MovieDetailsPage;
