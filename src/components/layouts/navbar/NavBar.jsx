import logo from "../../../img/star-wars-144px.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
      <nav className="nav-box">
        <div className="img-box">
          <img className="logo" src={logo} alt={`${"Star Wars Logo"}`} />
        </div>
        <div className="navigation">
          <ul className="main-nav-list">
            <li>
              <Link to="/" className="main-nav-link home--link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/people" className="main-nav-link">
                People
              </Link>
            </li>
            <li>
              <Link to="/planets" className="main-nav-link">
                Planets
              </Link>
            </li>
            <li>
              <Link to="/starships" className="main-nav-link">
                Starships
              </Link>
            </li>
            <li>
              <Link to="/species" className="main-nav-link">
                Species
              </Link>
            </li>
            <li>
              <Link to="/vehicles" className="main-nav-link">
                Vehicles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default NavBar;
