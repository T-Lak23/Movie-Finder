import React, { useContext, useEffect, useState } from "react";
import MovieNavbar from "../MovieNav/MovieNavbar";
import MovieSearch from "../MovieSearch/MovieSearch";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieHome.css";
import MovieSort from "../MovieSort/MovieSort";
import { FavoritesContext } from "../../context/FavoriteMovie";
import Pagination from "../pagination/Pagination";
import { useMovies } from "../../hook/useMovies";

const MovieHome = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [currentPage, setCurrentPage] = useState(1);

  //DEBOUCING
  useEffect(() => {
    const debounceHandler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(debounceHandler);
  }, [search]);

  const { movies, totalPages, loading, error } = useMovies({
    search: debouncedSearch,
    sortBy,
    currentPage,
  });

  //TEXT BASED ON SORTING
  function formatSortKey(sortBy) {
    switch (sortBy) {
      case "popularity.desc":
        return "Most Popular";

      case "popularity.asc":
        return "Least Popular";

      case "vote_count.desc":
        return "High Vote Count";

      case "vote_count.asc":
        return "Low Vote Count";
      case "primary_release_date.desc":
        return "Upcoming/Recently Released";
      default:
        return "Most Popular";
    }
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortBy]);

  //UPDATES PAGE
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="movie-page-container">
      <MovieNavbar />
      <MovieSearch search={search} setSearch={setSearch} />

      <div className="movies-container">
        <div className="movies-result-header">
          {debouncedSearch ? (
            <div>
              Results for{" "}
              <span className="movie-sort-title">{debouncedSearch}</span>
            </div>
          ) : (
            <div>
              {" "}
              Results sorted by:{" "}
              <span className="movie-sort-title">{formatSortKey(sortBy)}</span>
            </div>
          )}
          <MovieSort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        {loading ? (
          <div> Loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            <div className="all-movie-card-container">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavorited={favorites.some((fav) => fav.id === movie.id)}
                  onToggle={() => toggleFavorite(movie)}
                  loading={loading}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MovieHome;
