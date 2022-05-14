import { useState, useEffect } from "react";
import api from "../../services/Api";
import Container from "../layouts/container/Container";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      async function fetchPlanets() {
        setLoading(true);
        await api
          .get("/planets/")
          .then((response) => {
            setPlanets(response.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      fetchPlanets();
      setLoading(false);
    }, 3000);
  }, []);

  console.log(planets);
  console.log(loading);

  return (
    <>
      {loading ? (
        <Loader color="#ffd43b" size="30" loading={loading} />
      ) : (
        <div className="people-content" style={{ backgroundColor: "#333" }}>
          <div className="navbar-container">
            <NavBar />
          </div>
          <Container>
            <div className="card-container-people">
              <div className="cards grid grid--4-cols">
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
          </Container>
        </div>
      )}
    </>
  );
};

export default Planets;
