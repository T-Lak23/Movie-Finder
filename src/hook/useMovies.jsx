import { useEffect, useState } from "react";

export const useMovies = ({ search, sortBy, currentPage }) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  useEffect(() => {
    const fetchMovies = async (query = "", page = 1) => {
      setLoading(true);
      setError(null);
      try {
        const endPoint = query
          ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
              query
            )}&page=${page}`
          : `${API_BASE_URL}/discover/movie?sort_by=${sortBy}&page=${page}`;

        const response = await fetch(endPoint, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Server not responding..");
        }

        const data = await response.json();
        // console.log(data);
        if (!data.results || data.results.length === 0) {
          setError("No movies found.");
          setMovies([]);
          return;
        }

        setMovies(data.results || []);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      } catch (error) {
        setError(
          "Error Fetching Movies. Please try again later." || error.message
        );
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(search, currentPage);
  }, [search, sortBy, currentPage]);

  return { movies, error, loading, totalPages };
};
