import { Search } from "lucide-react";
import "./MovieSearch.css";

const MovieSearch = ({ search, setSearch }) => {
  return (
    <div className="search-outer-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for movies or keyword"
          autoComplete="off"
          className="search-input-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-input-button">
          <Search size={17} />
          Search
        </button>
      </div>
      <div className="search-examples">Try: Oppenheimer, Spiderman, Dune</div>
    </div>
  );
};

export default MovieSearch;
