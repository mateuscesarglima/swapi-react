import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const FilteredFilms = ({people}) => {

  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState([]);
  const { id } = useParams();



  useEffect(() => {
    
    async function fetchFilm() {
      await Api.get(`/films/${id}/`).then(({ data }) => {
        setFilm(data);
        setLoading(false);
      });
    }
    fetchFilm();
  }, []);

  const getName = (link) => {
    let person = people.find(people => people.url === link)
    return person.name
  }

  const getNumber = (link) => {
    let number = link.split("/");
    return number[5];
  };

  return (
    <>
      {loading ? (
        <div style={{ backgroundColor: "#333" }}>
          <NavBar />
          <Loader color="#ffd43b" size="100" />
        </div>
      ) : (
        <div
          className="people-content"
          style={{ backgroundColor: "#333", height: "100%" }}
        >
          <div className="navbar-container">
            <NavBar />
          </div>
          <div
            style={{
              maxWidth: "140rem",
              padding: "0 3.6rem",
              margin: "0 auto",
            }}
          >
            <div className="card-container-people">
              <div className="data-container">
                <h1 className="page-card-title">{film.title}</h1>
                <p className="page-card-text">
                  <strong>Director: </strong> <br />
                  {film.director}
                </p>
                <p className=" page-card-text">
                  <strong>Producer: </strong> <br /> {film.producer}
                </p>
                <p className="page-card-text">
                  <strong>Opening craw: </strong> <br />
                  {film.opening_crawl}
                </p>
                <p
                  className="page-card-text"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <strong>Characters: </strong>
                  {film.characters.map((character, index) => (
                    <Link
                      key={index}
                      style={{
                        textDecoration: "none",
                        color: "#FFF",
                        backgroundColor: "#ffd43b",
                        color: "#333",
                        fontSize: "2rem",
                        fontWeight: "500",
                        padding: "1rem",
                        display: "block",
                      }}
                      to={`/people/${getNumber(character)}`}
                    >
                      {getName(character)}
                    </Link>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredFilms;
