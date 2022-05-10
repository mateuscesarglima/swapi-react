import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import Container from "../container/Container";

const Carousel = () => {
  const data = [
    {
      id: 1,
      phrase: "May the force be with you",
      description:
        "May the force be with you is used to wish someone luck, and also for the power of the Force to be on the side of those who have strayed from the path.",
      usedBy: "Obi-Wan Kenobi",
    },
    {
      id: 2,
      phrase: "Your eyes can deceive you, don't trust them.",
      description:
        "This is a famous line spoken by Obi-Wan to Luke in Star Wars Episode IV: A New Hope early on in his training as a jedi.",
      usedBy: "Obi-Wan Kenobi",
    },
    {
      id: 3,
      phrase: "The ability to speak does not make you smart.",
      description:
        "The quote above is a famous phrase that Qui-Gon Jinn (Liam Neeson), master of Obi-Wan (Ewan McGregor), said to Jar Jar Binks (Ahmed Best) in Star Wars Episode I: The Phantom Menace.",
      usedBy: "Qui-Gon Jinn",
    },
    {
      id: 4,
      phrase: "Sua falta de fé é irritante.",
      description:
        "As palavras foram proferidas por ninguém menos do que o vilão Darth Vader (David Prouse) em Star Wars episódio IV: Uma Nova Esperança.",
      usedBy: "Darth Vader",
    },
    {
      id: 5,
      phrase: "Não. Não tente. Faça ou não faça, mas não tente.",
      description:
        "Uma das mais inspiradoras phrases da saga foi dita por Mestre Yoda para Luke Skywalker em Star Wars Episódio V: O Império Contra-Ataca",
      usedBy: "Mestre Yoda",
    },
    {
      id: 6,
      phrase: "Sem dúvidas, maravilhosa a mente de uma criança é.",
      description:
        "O mestre Jedi verdinho e queridinho do público também é o responsável por esta citação. Aqui ele se refere à resposta de um pequeno Padawan em Star Wars Episódio II: Ataque dos Clones.",
      usedBy: "Mestre Yoda",
    },
    {
      id: 7,
      phrase: "Seu foco determina sua realidade.",
      description:
        "Essas sábias palavras foram ditas por Qui-Gon Jin a Anakin (Jake Lloyd) quando este deixa Coruscant para ir à Naboo em Star Wars Episódio I: A Ameaça Fantasma.",
      usedBy: "Qui-Gon Jinn",
    },
    {
      id: 8,
      phrase: "Luke, i'm your father",
      description:
        "Que a força esteja com você é usada para desejar sorte a alguém, e também para que o poder da Força esteja do lado daqueles que se desviaram do caminho",
      usedBy: "Dath Vader",
    },
  ];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Container>
        <h1 className="carousel-primary-heading" style={{color: "#FFF", textAlign: "center", fontFamily: "'Ubuntu', sans-serif"}}>Most famous Star Wars quotes</h1>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <h1 className="heading-secondary">"{item.phrase}"</h1>
              <p className="carousel-description">{item.description}</p>
              <p className="person">{item.usedBy}</p>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Carousel;
