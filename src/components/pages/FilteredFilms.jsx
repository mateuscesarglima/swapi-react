import React, { useEffect, useState } from "react";
import NavBar from "../layouts/navbar/NavBar";
import Loader from "../layouts/loader/Loader";
import { Link, useParams } from "react-router-dom";
import Api from "../../services/Api";


const FilteredFilms = () => {
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchFilm() {
      await Api.get(`/films/${id}`).then(({ data }) => {
        console.log(data);
        setFilm(data);
        setLoading(false);
      });
    }
    fetchFilm();
  });

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
                <p className="page-card-first-content page-card-text">
                  <strong>Producer: </strong> <br /> {film.producer}
                </p>
                <p className="page-card-second-content page-card-text">
                  <strong>Opening craw: </strong> <br />
                  {film.opening_crawl}
                </p>
                <p className="page-card-text">
                      <strong>Characters: </strong> <br />
                      {film.characters.map((character, index) => (
                        <Link
                          key={index}
                          style={{
                            display: "flex",
                            textDecoration: "none",
                            color: "#FFF",
                          }}
                          to={`/people/${index + 1}`}
                        >
                          {`Character ` + (index + 1)}
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
