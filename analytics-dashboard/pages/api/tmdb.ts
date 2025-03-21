import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};