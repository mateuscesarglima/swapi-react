import { useEffect, useState } from "react";
import api from "../../services/Api";
import NavBar from "../layouts/navbar/NavBar";
import Loader from "../layouts/loader/Loader";

const Starships = () => {
    
  const [loading, setLoading] = useState(true);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      await api
        .get("/starships/")
        .then(({ data }) => {
          setStarships(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchStarships();
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
                {starships.map((starship, index) => (
                  <div className="data-container" key={index}>
                    <h1 className="page-card-title">{starship.name}</h1>
                    <p className="page-card-text">
                      <strong>Model: </strong><br/> {starship.model}
                    </p>
                    <p className="page-card-text">
                      <strong>Const in credits: </strong><br/> {starship.cost_in_credits}
                    </p>
                    <p className="page-card-text">
                      <strong>Hyperdrive rating: </strong> <br/>{starship.hyperdrive_rating}
                    </p>
                    <p className="page-card-text">
                      <strong>Lenght: </strong><br/>
                      {starship.length}
                    </p>
                    <p className="page-card-text">
                      <strong>Manufacturer: </strong><br/>
                      {starship.manufacturer}
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

export default Starships;
