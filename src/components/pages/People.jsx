import { useEffect, useState } from "react";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";
import Person from "./Person";


const People = ({films }) => {
  
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {

    async function fetchPeople() {
      await api.get(`/people/`).then(({ data }) => {
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
                  <Person key={index} person={person} films={films} index={index}/>
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
