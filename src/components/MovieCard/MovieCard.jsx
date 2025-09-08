import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import { Heart } from "lucide-react";

const MovieCard = ({
  movie: { title, poster_path, vote_average, release_date, id },
  isFavorited,
  onToggle,
  className,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="card-container" onClick={handleNavigation}>
      <div className="card-image-container">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "./No-Poster1.png"
          }
          className="card-image"
          alt={title}
        />
        <div className="card-header">
          <p className="card-title">{title}</p>
          <button
            onClick={onToggle ? () => onToggle() : null}
            className={className ? className : "card-favorite-toggle"}
          >
            {isFavorited ? (
              <Heart fill="red" className="heart-icon" />
            ) : (
              <Heart className="heart-icon" />
            )}
          </button>
        </div>
      </div>

      <div className="card-movie-info">
        <p className="card-release-date">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
        <p className="card-vote-average">
          <img className="card-vote-icon" src="/star.png" alt="star icon" />
          {vote_average ? vote_average.toFixed(1) : "N/A"}/10
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
