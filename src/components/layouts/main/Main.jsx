import Container from "../container/Container";
import HomeCard from "../HomePageCard/HomeCard";
import "./Main.css";
const Main = () => {
  return (
    <div className="main-background">
      <Container>
        <main>
          {/* <section className="section-featured">
          <div className="container">
            <h2 className="heading-film-by">A film by:</h2>
          </div>
          <div className="logo">
            <img
              className="logo"
              src={lucasFilmLogo}
              alt={`${lucasFilmLogo}`}
            />
          </div>
        </section> */}

          <section className="main-section" id="main-section">
            <div className="subheading-box">
              <span className="subheading">Welcome to Star Wars World</span>
            </div>
            <h2 className="heading-secondary">
              Click on the buttons below to learn more
            </h2>

            <div>
                <HomeCard />
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
};

export default Main;
