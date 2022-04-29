
import NavBar from "./NavBar";
import "./Header.css";

const Header = ({title}) => {
  return (
    <header className="header">
      <NavBar />
      <section className="section-hero">
        <div className="hero grid grid--2-cols">
          <div className="hero-text-box">
            {/* <h1 className="heading-primary">
              Your best site to learn more about the amazing world of Star Wars
            </h1> */}
            <h1 className="heading-primary">{title}</h1>
            <p className="hero-description">
              Here you find informations from Star Wars World. You will know more
              about Star Wars People, Planets, Starships, Species and Vehicles.
            </p>
            <a href="#" className="btn btn--full">Getting Start</a>
            <a href="#" className="btn btn--outline"></a>
          </div>
          <div></div>
        </div>
      </section>
    </header>
  );
};

export default Header;
