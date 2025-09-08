import { Heart } from "lucide-react";

const MovieFavoriteToggle = ({ movie, isFavorited, onToggle }) => (
  <button onClick={() => onToggle(movie)} className="movie-favorite-toggle">
    {isFavorited ? (
      <div className="favorite">
        <Heart fill="red" className="heart-icon" /> Marked as favorite
      </div>
    ) : (
      <div className="not-favorite">
        <Heart className="heart-icon" /> Mark as favorite
      </div>
    )}
  </button>
);

export default MovieFavoriteToggle;
