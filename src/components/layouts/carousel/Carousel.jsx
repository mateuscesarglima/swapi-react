import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import Container from "../container/Container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const data = [
    {
      phrase: "May the force be with you",
      description:
        '"May the force be with you" is used to wish someone luck, and also for the power of the Force to be on the side of those who have strayed from the path.',
      usedBy: "Obi-Wan Kenobi",
    },
    {
      phrase: "Your eyes can deceive you, don't trust them.",
      description:
        "This is a famous line spoken by Obi-Wan to Luke in Star Wars Episode IV: A New Hope early on in his training as a jedi.",
      usedBy: "Obi-Wan Kenobi",
    },
    {
      phrase: "The ability to speak does not make you smart.",
      description:
        "The quote above is a famous phrase that Qui-Gon Jinn (Liam Neeson), master of Obi-Wan (Ewan McGregor), said to Jar Jar Binks (Ahmed Best) in Star Wars Episode I: The Phantom Menace.",
      usedBy: "Qui-Gon Jinn",
    },
    {
      phrase: "Your lack of faith is irritating.",
      description:
        "The words were uttered by none other than the villainous Darth Vader (David Prouse) in Star Wars Episode IV: A New Hope.",
      usedBy: "Darth Vader",
    },
    {
      phrase: "Not. Do not try. Do it or don't do it, but don't try",
      description:
        "One of the most inspiring phrases in the saga was said by Master Yoda to Luke Skywalker in Star Wars Episode V: The Empire Strikes Back",
      usedBy: "Master Yoda",
    },
    {
      phrase: "Undoubtedly, wonderful the mind of a child is.",
      description:
        "The green and darling Jedi master of the public is also responsible for this quote. Here he refers to a little Padawan's response in Star Wars Episode II: Attack of the Clones.",
      usedBy: "Master Yoda",
    },
    {
      phrase: "Seu foco determina sua realidade.",
      description:
        "Essas sábias palavras foram ditas por Qui-Gon Jin a Anakin (Jake Lloyd) quando este deixa Coruscant para ir à Naboo em Star Wars Episódio I: A Ameaça Fantasma.",
      usedBy: "Qui-Gon Jinn",
    },
    {
      phrase: "Luke, i'm your father",
      description:
        "Que a força esteja com você é usada para desejar sorte a alguém, e também para que o poder da Força esteja do lado daqueles que se desviaram do caminho",
      usedBy: "Darth Vader",
    },
  ];

  let settings = {
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="item-box">
                <h1 className="carousel-item-title">"{item.phrase}"</h1>
                <p className="carousel-description">{item.description}</p>
                <p className="person">&mdash; {item.usedBy}</p>
              </div>
            ))}
          </Slider>
        </div>
        <p className="inspired-by">
          this section was inspired by: Maria Eduarda Mendonça <br />
          In one of our conversations, I was talking about the project and she
          commented <br /> on a quote from Darth Vader giving me the idea of
          ​​creating a section only of famous quotes from Star Wars
        </p>
      </Container>
    </div>
  );
};

export default Carousel;
