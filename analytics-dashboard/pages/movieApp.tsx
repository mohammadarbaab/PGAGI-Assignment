// import { useState } from "react";
// import MovieCard from "./components/MovieCard";
// import SearchBar from "./components/SearchBar";
// import { fetchTopRatedMovies, searchMovies } from "./api/tmdb";
// import { Movie } from "../types";

// interface HomeProps {
//   topRatedMovies: Movie[];
// }
// interface MoviesPageProps {
//   movies: Movie[];
// }

// export default function Home({ topRatedMovies }: HomeProps) {
//   const [movies, setMovies] = useState<Movie[]>(topRatedMovies);

//   // Handle search
//   const handleSearch = async (query: string) => {
//     if (query) {
//       const results = await searchMovies(query);
//       setMovies(results);
//     } else {
//       setMovies(topRatedMovies); // Reset to top-rated movies if search query is empty
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center my-8">Movie App</h1>

//       {/* Search Bar */}
//       <SearchBar onSearch={handleSearch} />

//       {/* Movie Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Fetch top-rated movies on the server side
// export async function getServerSideProps() {
//   const topRatedMovies = await fetchTopRatedMovies();
//   return {
//     props: {
//       topRatedMovies,
//     },
//   };
// }


import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import { fetchTopRatedMovies, searchMovies } from "./api/tmdb";
import { Movie } from "../types";

interface HomeProps {
  topRatedMovies: Movie[];
}

export default function Home({ topRatedMovies }: HomeProps) {
  const [movies, setMovies] = useState<Movie[]>(topRatedMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  // Handle search
  const handleSearch = async (query: string) => {
    if (query) {
      const results = await searchMovies(query);
      setMovies(results);
      setCurrentPage(1); // Reset to the first page on new search
    } else {
      setMovies(topRatedMovies); // Reset to top-rated movies if search query is empty
      setCurrentPage(1); // Reset to the first page
    }
  };

  // Pagination Logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Movie App</h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-lg ${currentPage === number ? "bg-blue-900 text-white" : "bg-gray-300"}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Fetch top-rated movies on the server side
export async function getServerSideProps() {
  const topRatedMovies = await fetchTopRatedMovies();
  return {
    props: {
      topRatedMovies,
    },
  };
}
