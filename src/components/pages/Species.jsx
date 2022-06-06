import { useState, useEffect } from "react";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpecies() {
      await api
        .get("/species/")
        .then(({ data }) => {
          setSpecies(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchSpecies();
    setTimeout(() => {
      
    }, 3000);
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
                {species.map((specie, index) => (
                  <div className="data-container" key={index}>
                    <h1 className="page-card-title">{specie.name}</h1>
                    <p className="page-card-first-content page-card-text">
                      <strong>Classification: </strong><br/> {specie.classification}
                    </p>
                    <p className="page-card-second-content page-card-text">
                      <strong>Skin colors: </strong><br/> {specie.skin_colors}
                    </p>
                    <p className="page-card-third-content page-card-text">
                      <strong>Language: </strong><br/>
                      {specie.language}
                    </p>
                    <p className="page-card-fourth-content page-card-text">
                      <strong>Designation: </strong><br/>
                      {specie.designation}
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

export default Species;
