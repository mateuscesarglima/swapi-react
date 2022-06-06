import NavBar from "../navbar/NavBar";

//SCROLL
import {Link, animateScroll as scroll} from 'react-scroll'

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <section className="section-hero">
        <div className="hero grid grid--2-cols">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Your best site to learn more about the amazing world of Star Wars
            </h1>
            <p className="hero-description">
              Here you find informations from Star Wars World. You will know
              more about Star Wars People, Planets, Starships, Species and
              Vehicles.
            </p>
            <Link
                activeClass="active"
                to="main-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                className="btn btn--full"
              >
                Start Your Journey
              </Link>
            {/* <LinkButton to="#main-section" className="btn btn--full">
              Start Your Journey
            </LinkButton> */}
          </div>
          <div></div>
        </div>
      </section>
    </header>
  );
};

export default Header;
