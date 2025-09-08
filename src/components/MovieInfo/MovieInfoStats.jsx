const MovieInfoStats = ({ movie }) => {
  const date = new Date(movie.release_date);
  const upcoming = date > new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const languageName = new Intl.DisplayNames(["en"], { type: "language" });
  const fullLanguage = movie.original_language
    ? languageName.of(movie.original_language)
    : "Unknown";

  return (
    <div className="movie-final-details">
      <div className="info-row">
        <span className="info-label">Release Date</span>
        <span className="info-value">
          {formattedDate} {upcoming && <span>(upcoming)</span>}
        </span>
      </div>
      <div className="info-row">
        <span className="info-label">Status</span>
        <span className="info-value">{movie.status || "N/A"}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Language</span>
        <span className="info-value">{fullLanguage}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Vote Count</span>
        <span className="info-value">{movie.vote_count || "N/A"}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Revenue</span>
        <span className="info-value">
          {movie.revenue === 0 ? "N/A" : `$${movie.revenue} (USD)`}
        </span>
      </div>
      <div className="info-row">
        <span className="info-label">Popularity</span>
        <span className="info-value">
          {movie.popularity?.toFixed(2) || "N/A"}{" "}
          <span className="info-inner-value">
            (Based on page views, vote count, rating, recency, and buzz)
          </span>
        </span>
      </div>
      <div className="info-row">
        <span className="info-label">Duration</span>
        <span className="info-value">
          {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
        </span>
      </div>
      <div className="info-row">
        <span className="info-label">Adult</span>
        <span className="info-value">{movie.adult ? "18+" : "N/A"}</span>
      </div>
    </div>
  );
};

export default MovieInfoStats;
