const MovieInfoHeader = ({ title, originalTitle, releaseDate, genres }) => {
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="movie-title-info">
      <p className="movie-detail-title">{title}</p>
      <p className="movie-detail-titl2-2">
        <span className="movie-title-span">Original Title:</span>{" "}
        {originalTitle}
      </p>
      <p className="movie-base-one">{formattedDate}</p>
      <div className="movie-base-two">
        {genres.map((g) => (
          <p className="movie-genre" key={g.id}>
            {g.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieInfoHeader;
