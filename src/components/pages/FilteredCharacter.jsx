import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const FilteredCharacter = ({ films }) => {
  const [loading, setLoading] = useState(true);
  const [loadingFilm, setLoadingFilm] = useState(true);
  const [people, setPeople] = useState([]);
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPeople() {
      await Api.get(`/people/${id}/`).then(({ data }) => {
        setPeople(data);
        setLoading(false);
      });
    }
    fetchPeople();
  }, [id]);

  useEffect(() => {
    async function fetchFilms() {
      if (people?.name) {
        await Promise.all(
          people?.films?.map((film) => axios.get(film).then(({ data }) => data))
        ).then((data) => {
          setFilm(data);
          setLoadingFilm(false);
        });
      }
    }
    fetchFilms();
    fetchFilms();
  }, [people]);

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
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="data-container">
                  <h1 className="page-card-title">{people.name}</h1>
                  <p className="page-card-text">
                    <strong>Birth Year: </strong>
                    <br />
                    {people.birth_year}
                  </p>
                  <p className="page-card-text">
                    <strong>Height: </strong>
                    <br /> {people.height} cm
                  </p>
                  <p className="page-card-text">
                    <strong>Mass: </strong>
                    <br /> {people.mass}
                  </p>
                  <p className="page-card-text">
                    <strong>Hair color: </strong>
                    <br />
                    {people.hair_color}
                  </p>
                  <p className="page-card-text">
                    <strong>Skin color: </strong>
                    <br />
                    {people.skin_color}
                  </p>
                  <div className="page-card-text" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}>
                    <strong>Films: </strong>

                    {loadingFilm ? (
                      <div style={{ backgroundColor: "#333" }}>
                        <Loader color="#ffd43b" size="100" />
                      </div>
                    ) : (
                      <>
                        {people.films.map((films, index) => (
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
                            to={`/films/${index + 1}`}
                          >
                            {
                            film?.find(
                              (filmData) => filmData.url === films
                            )?.title
                          }
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredCharacter;
