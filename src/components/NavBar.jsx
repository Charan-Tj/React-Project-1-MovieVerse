import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      {" "}
      <div className="navbar-brand">
        <Link to="/">
          <span>🎬 MovieVerse</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className={`nav-link ${
            location.pathname === "/favourites" ? "active" : ""
          }`}
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
