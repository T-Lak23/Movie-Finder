import React, { useContext } from "react";
import MovieNavbar from "../MovieNav/MovieNavbar";
import { FavoritesContext } from "../../context/FavoriteMovie";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieFavorites.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const MovieFavorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();
  return (
    <>
      <MovieNavbar />
      <div className="go-back" onClick={() => navigate("/")}>
        <ArrowLeft /> Go Back
      </div>
      <div className="favorite-container">
        <h2>Favorites</h2>
        <div className="all-movie-favorite-card-container">
          {favorites &&
            favorites.map((f) => (
              <MovieCard key={f.id} movie={f} className="hide" />
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieFavorites;
