import React, { useMemo, useState,useEffect } from 'react';
import { $services } from '../../utils/Service';
const movies = [
  { id: 1, name: 'Interstellar 2', imageSrc: 'https://i.postimg.cc/kGyCw8w0/img.jpg?height=400&width=300', releaseDate: '2024-06-15', genre: 'Sci-fi' },
  { id: 2, name: 'The Matrix Resurrections 2', imageSrc: 'https://i.postimg.cc/kGyCw8w0/img.jpg?height=400&width=300', releaseDate: '2024-07-01', genre: 'Action' },
  { id: 3, name: 'Inception: Dream\'s End', imageSrc: 'https://i.postimg.cc/kGyCw8w0/img.jpg?height=400&width=300', releaseDate: '2024-08-20', genre: 'Thriller' },
  { id: 4, name: 'Avatar 3', imageSrc: '/placeholder.svg', releaseDate: '2024-09-10', genre: 'Fantasy' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  { id: 5, name: 'Dune: Part Three', imageSrc: '/placeholder.svg', releaseDate: '2024-10-05', genre: 'Adventure' },
  // ... more movies (total 20)
  // ... more movies (total 20)
];

export default function UpcomingMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;
  const totalPages = Math.ceil(movies.length / moviesPerPage);


useEffect(()=>{
  fetchUpcommingMovie()
});

const fetchUpcommingMovie=async()=>{
  // const _res=await $services.imdb100Movies('');
  // console.log("_res",_res)
}

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    console.log("currentPage", currentPage);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const displayedMovies = useMemo(() => {
    console.log("currentPage2", currentPage);
    return movies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);
  }, [currentPage])


  console.log("displayedMovies", displayedMovies)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Upcoming Movies</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {(displayedMovies.map((movie, index) => {
            return <>
              <div key={movie.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                  <img
                    src={movie.imageSrc}
                    alt={movie.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{movie.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{movie.genre}</p>
                    <p className="mt-1 text-sm text-gray-500">Release Date: {movie.releaseDate}</p>
                  </div>
                </div>
              </div>
            </>
          }))}

        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md disabled:opacity-50"
          >
            Previous
          </button>

          <div className="text-lg">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
