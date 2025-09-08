import "./MovieSort.css";

const MovieSort = ({ sortBy, setSortBy }) => {
  return (
    <div className="movie-sort-container">
      <label htmlFor="sort">Sort by</label>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        id="sort"
      >
        <option value="popularity.desc">Most Popular</option>
        <option value="popularity.asc">Least Popular</option>
        <option value="vote_count.desc">High Rated</option>
        <option value="vote_count.asc">Low Rated</option>
        <option value="primary_release_date.desc">Recently Released</option>
      </select>
    </div>
  );
};

export default MovieSort;
