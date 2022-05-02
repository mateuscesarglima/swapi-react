import Container from "../container/Container";
import lucasFilmLogo from "../../../img/lucasFilmLogo.png"
import "./Main.css";
const Main = () => {
  return (
    <Container>
      <main>
        <section className="section-featured">
          <div className="container">
            <h2 className="heading-film-by">A film by:</h2>
          </div>
          <div className="logo">
            <img className="logo" src={lucasFilmLogo} alt={`${lucasFilmLogo}`} />
          </div>
        </section>
        <section className="main-section" id="main-section">
          <span className="subheading">Welcome to Star Wars World</span>
          <h2 className="heading-secondary">
            Click on the buttons below to learn more
          </h2>
        </section>
      </main>
    </Container>
  );
};

export default Main;
