import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const Films = () => {

  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);


  useEffect(() => {
    async function fetchFilms() {
      await api
        .get("/films/")
        .then(({ data }) => {
          setFilms(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchFilms();
  });

  return (
    <>
      {loading ? (
        <div style={{ backgroundColor: "#333" }}>
          <NavBar />
          <Loader color="#ffd43b" size="100" />
        </div>
      ) : (
        <div className="people-content" style={{ backgroundColor: "#333" }}>
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
              <div className="cards grid grid--3-cols">
                {films.map((film, index) => (
                  <div className="data-container" key={index}>
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
                    <p className="page-card-text" style={{display: 'flex', flexDirection: "column", gap: "1rem"}}>
                      <strong>Characters: </strong> <br />
                      {film.characters.map((character, index) => (
                        <Link
                          key={index}
                          style={{
                            textDecoration: "none",
                            color: "#FFF",
                            backgroundColor: '#ffd43b',
                            color: "#333",
                            fontSize: "2rem",
                            fontWeight: "500",
                            padding: "1rem"
                          }}
                          to={`/people/${index + 1}`}
                        >
                          {`Character ` + (index + 1)}
                        </Link>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Films;
