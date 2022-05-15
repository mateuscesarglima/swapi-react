import NavBar from "../layouts/navbar/NavBar";
import api from "../../services/Api";
import { useEffect, useState } from "react";
import Loader from "../layouts/loader/Loader";

const Vehicles = () => {
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      await api
        .get("/vehicles/")
        .then(({ data }) => {
          setVehicles(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchVehicles();
  }, []);

  console.log(vehicles)

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
                {vehicles.map((vehicle, index) => (
                  <div className="data-container" key={index}>
                    <h1 className="page-card-title">{vehicle.name}</h1>
                    <p className="page-card-text">
                      <strong>Model: </strong> {vehicle.model}
                    </p>
                    <p className="page-card-text">
                      <strong>Vechicle class: </strong>
                      {vehicle.vehicle_class}
                    </p>
                    <p className="page-card-text">
                      <strong>Passengers: </strong>{" "}
                      {vehicle.passengers}
                    </p>
                    <p className="page-card-text">
                      <strong>Cost in credits: </strong>{" "}
                      {vehicle.cost_in_credits}
                    </p>
                    <p className="page-card-text">
                      <strong>Lenght: </strong>
                      {vehicle.length}
                    </p>
                    <p className="page-card-text">
                      <strong>Manufacturer: </strong>
                      {vehicle.manufacturer}
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

export default Vehicles;
