const MovieOverview = ({ overview }) => (
  <div className="movie-detail-desc">
    <p className="movie-desc-title">Overview</p>
    <p className="movie-desc-body">{overview}</p>
  </div>
);

export default MovieOverview;
