import Container from "../container/Container";
import HomeCard from "../HomePageCard/HomeCard";
import planetTatooine from "../../../img/planets/tatooine.webp";
import Carousel from "../carousel/Carousel";
import "./Main.css";
const Main = () => {
  return (
    <div className="main-background">
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
        <Container>
          <section className="main-section" id="main-section">
            <div className="subheading-box">
              <span className="subheading">Welcome to Star Wars World</span>
            </div>
            <h2 className="heading-secondary">
              Click on the buttons below to learn more
            </h2>
            <div className="card-container grid grid--2-cols grid--center-v">
              <HomeCard
                title="Planets"
                number="01"
                img={planetTatooine}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat ea dignissimos tenetur, nihil animi? Assumenda delectus repudiandae nam veritatis."
                content="Click here!"
                to="/planets"
              />
              <HomeCard
                title="People"
                number="02"
                img="https://lumiere-a.akamaihd.net/v1/images/yoda-s-lightsaber-main_9ebf17d9.jpeg?region=372%2C0%2C536%2C536&width=320"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat ea dignissimos tenetur, nihil animi? Assumenda delectus repudiandae nam veritatis."
                content="Click here!"
                to="/people"
              />
              <HomeCard
                title="Starships"
                number="03"
                img="https://lumiere-a.akamaihd.net/v1/images/databank_alderaancruiser_01_169_c60ce268.jpeg?region=255%2C0%2C877%2C878&width=320"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat ea dignissimos tenetur, nihil animi? Assumenda delectus repudiandae nam veritatis."
                content="Click here!"
                to="/starships"
              />
              <HomeCard
                title="Species"
                number="04"
                img="https://lumiere-a.akamaihd.net/v1/images/tlj-abednedo-databank-main-image_bd8babfb.jpeg?region=341%2C0%2C878%2C878&width=320"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat ea dignissimos tenetur, nihil animi? Assumenda delectus repudiandae nam veritatis."
                content="Click here!"
                to="/species"
              />
              <HomeCard
                title="Vehicles"
                number="05"
                img="https://lumiere-a.akamaihd.net/v1/images/at-act-walker_78783f1b.jpeg?region=309%2C0%2C541%2C542&width=320"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat ea dignissimos tenetur, nihil animi? Assumenda delectus repudiandae nam veritatis."
                content="Click here!"
                to="/vehicles"
              />
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default Main;
