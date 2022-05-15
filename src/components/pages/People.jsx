import NavBar from "../layouts/navbar/NavBar";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";

const People = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      await api.get("/people/").then(({ data }) => {
        setPeople(data.results);
        setLoading(false);
      });
    }
    fetchPeople();
  }, []);

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
                {people.map((person, index) => (
                  <div className="data-container" key={index}>
                    <h1 className="page-card-title">{person.name}</h1>
                    <p className="page-card-text">
                      <strong>Birth Year: </strong>
                      {person.birth_year}
                    </p>
                    <p className="page-card-first-content page-card-text">
                      <strong>Height: </strong> {person.height} cm
                    </p>
                    <p className="page-card-second-content page-card-text">
                      <strong>Mass: </strong> {person.mass}
                    </p>
                    <p className="page-card-third-content page-card-text">
                      <strong>Hair color: </strong>
                      {person.hair_color}
                    </p>
                    <p className="page-card-fourth-content page-card-text">
                      <strong>Skin color: </strong>
                      {person.skin_color}
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

export default People;
