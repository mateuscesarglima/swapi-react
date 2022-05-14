import NavBar from "../layouts/navbar/NavBar";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import Container from "../layouts/container/Container";


const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      await api
        .get("/people/")
        .then((response) => {
          setPeople(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPeople();
    setLoading(false);
  }, []);

  console.log(people);

  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>
      <Container>
        <div className="card-container-people">
          <div className="cards grid grid--4-cols">
            {people.map((person, index) => (
              <div className="data-container" key={index}>
                <h1 className="page-card-title">{person.name}</h1>
                <p className="page-card-first-content">{person.height}</p>
                <p className="page-card-second-content">{person.eye_color}</p>
                <p className="page-card-third-content">{person.hair}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default People;
