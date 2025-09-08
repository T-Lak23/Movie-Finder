import { Route, Routes } from "react-router-dom";
import MovieHome from "./components/MovieHome/MovieHome";
import MovieFavorites from "./components/MovieFavorites/MovieFavorites";
import { MovieInfo } from "./components/MovieInfo/MovieInfo";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/favorites" element={<MovieFavorites />} />
        <Route path="/:id" element={<MovieInfo />} />
      </Routes>
    </div>
  );
};

export default App;
