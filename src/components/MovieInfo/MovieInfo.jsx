import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieInfo.css";
import MovieNavbar from "../MovieNav/MovieNavbar";
import { ArrowLeft, Heart, StepBack } from "lucide-react";
import { FavoritesContext } from "../../context/FavoriteMovie";
import MovieInfoHeader from "./MovieInfoHeader";
import MovieOverview from "./MovieOverview";
import MovieFavoriteToggle from "./MovieFavoriteToggle";
import MovieInfoStats from "./MovieInfoStats";

export const MovieInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const fetchMovieDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Server not responding..");
      }

      const data = await response.json();
      console.log(data);

      if (!data || !data.poster_path) {
        setError("Movie data incomplete.");
        setMovie(null);
        return;
      }

      setMovie(data);
    } catch (error) {
      setError(`No Movie Found. (Redirecting to HomePage)`);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  return (
    <>
      <MovieNavbar />
      {loading ? (
        <div className="movie-detail-loading">Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="go-back" onClick={() => navigate("/")}>
            <ArrowLeft /> Go Back
          </div>
          <div className="movie-detail-container">
            <div className="movie-detail-image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-detail-info">
              <MovieInfoHeader
                title={movie.title}
                originalTitle={movie.original_title}
                releaseDate={movie.release_date}
                genres={movie.genres}
              />
              <MovieOverview overview={movie.overview} />
              <MovieFavoriteToggle
                movie={movie}
                isFavorited={favorites.some((fav) => fav.id === movie.id)}
                onToggle={toggleFavorite}
              />
              <MovieInfoStats movie={movie} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
