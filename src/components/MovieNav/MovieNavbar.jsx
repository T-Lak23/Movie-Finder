import { Clapperboard, Heart } from "lucide-react";
import "./MovieNavbar.css";
const MovieNavbar = () => {
  return (
    <div className="header">
      <a href="/" className="logo-container">
        <Clapperboard size={25} />
        <h1 className="logo-name">CineFind</h1>
      </a>

      <div className="navbar">
        <Heart size={22} />
        <a className="navbar-link" href="/favorites">
          Favorites
        </a>
      </div>
    </div>
  );
};

export default MovieNavbar;
