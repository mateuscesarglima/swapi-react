import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchSpecificFilm from "../../services/fetchSpecificFilm";
import fetchPerson from "../../services/fetchPerson";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const FilteredFilms = () => {
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchSpecificFilm.get(id).then(({ data }) => {
      setFilm(data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (film?.title) {
      async function fetchCharacter() {
        await Promise.all(
          film?.characters?.map((character) =>
            fetchPerson.get(character).then(({ data }) => data)
          )
        ).then((data) => {
          setCharacters(data);
          setLoadingCharacters(false)
        });
      }
      fetchCharacter();
    }
  }, [film]);

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
                <div
                  className="page-card-text"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <strong>Characters: </strong>
                  {loadingCharacters ? (
                    <div style={{ backgroundColor: "#333" }}>
                      <Loader color="#ffd43b" size="100" />
                    </div>
                  ) : (
                    <>
                      {film?.characters?.map((character, index) => (
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
                          {
                            characters?.find(
                              (person) => person.url === character
                            )?.name
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
      )}
    </>
  );
};

export default FilteredFilms;
