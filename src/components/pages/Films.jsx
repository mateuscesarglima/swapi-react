import NavBar from "../layouts/navbar/NavBar";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";

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

  console.log(films)

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
                      <strong>Director: </strong>
                      {film.director}
                    </p>
                    <p className="page-card-first-content page-card-text">
                      <strong>Producer: </strong> {film.producer}
                    </p>
                    <p className="page-card-second-content page-card-text">
                      <strong>Opening craw: </strong> {film.opening_crawl}
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
