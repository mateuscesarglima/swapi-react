import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import {animateScroll as scroll} from 'react-scroll'
import "./Footer.css";
import Container from "../container/Container";
import logo from "../../../img/star-wars-144px.svg";

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <footer>
      <Container>
        <div className="grid footer-grid">
          <div className="logo-col">
            <Link to="/">
              <img src={logo} alt="star wars logo" onClick={scrollToTop}/>
            </Link>
            <ul className="social-links">
              <li className="social-link">
                <a
                  href="https://www.instagram.com/_mateuscesar_/?hl=pt-br"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="instagram"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://twitter.com/starwars"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="twitter"
                >
                  <BsTwitter />
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://www.facebook.com/StarWars"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="facebook"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://www.youtube.com/user/starwars"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="youtube"
                >
                  <BsYoutube />
                </a>
              </li>
            </ul>
            <p className="copyright">
              TM & LucasFilm Ltda. All Rights Reserved
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact me</p>
            <address className="contacts">
              <p className="address">
                Rua Carlos Chagas 779,
                <br />
                Fortaleza, CE. 600000-000
              </p>
              <p className="contact">
                85 999999999 <br /> mateuscesarglima@gmail.com
              </p>
            </address>
          </div>
          <div className="challenge-by">
            <p className="footer-heading">Challenge by:</p>
            <p className="atlantico">
              Instituto Atl??ntico,
              <br /> Atl??ntico Academy asCan
            </p>
            <a
              href="https://www.atlantico.com.br/academy-bootcamp/"
              target="_blank"
              rel="noreferrer noopener"
              className="know-more-footer"
            >Learn more about it</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
