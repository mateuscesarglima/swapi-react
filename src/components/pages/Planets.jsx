import { useState, useEffect } from "react";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      await api
        .get("/planets/")
        .then(({ data }) => {
          setPlanets(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPlanets();
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
              maxHeight: "100%"
            }}
          >
            <div className="card-container-people">
              <div className="cards grid grid--3-cols">
                {planets.map((planet, index) => (
                  <div className="data-container" key={index}>
                    <h1 className="page-card-title">{planet.name}</h1>
                    <p className="page-card-first-content page-card-text">
                      <strong>Rotation: </strong> {planet.rotation_period}
                    </p>
                    <p className="page-card-second-content page-card-text">
                      <strong>Diameter: </strong> {planet.diameter}
                    </p>
                    <p className="page-card-third-content page-card-text">
                      <strong>Climate: </strong>
                      {planet.climate}
                    </p>
                    <p className="page-card-fourth-content page-card-text">
                      <strong>Terrain: </strong>
                      {planet.terrain}
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

export default Planets;
