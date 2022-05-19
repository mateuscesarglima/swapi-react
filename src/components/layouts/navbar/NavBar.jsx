import logo from "../../../img/star-wars-144px.svg";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const handleMenu = (e) => {
    e.preventDefault();
    const navBox = document.querySelector(".nav-box");
    navBox.classList.toggle("nav-open");
  };

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
          <li>
            <Link to="/films" className="main-nav-link">
              Films
            </Link>
          </li>
        </ul>
      </div>
      <button className="btn-mobile-nav">
        <FiMenu className="icon-mobile-nav"
         name="menu" 
         onClick={handleMenu} />
        <RiCloseFill
          className="icon-mobile-nav"
          name="close"
          onClick={handleMenu}
        />
      </button>
    </nav>
  );
};

export default NavBar;
