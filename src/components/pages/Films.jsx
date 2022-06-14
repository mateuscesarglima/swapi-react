import { useEffect, useState } from "react";
import api from "../../services/Api";
import Loader from "../layouts/loader/Loader";
import NavBar from "../layouts/navbar/NavBar";
import Film from "./Film";

const Films = () => {

  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([])
  
  const arr = new Set()

  useEffect(() => {
    async function fetchFilms() {
      await api
        .get("/films/")
        .then(({ data }) => {
          setFilms(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function fetchPeople() {
      for (let i = 1; i <= 83; i++) {
        if (i === 17) {
          continue;
        }
        await api.get(`/people/${i}/`).then(({ data }) => {
          arr.add(data.name)
        });
      }
      setCharacters(arr)
      setLoading(false)
    }
    fetchFilms();
    fetchPeople();
  }, []);

  console.log(characters)

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
                {films.map((film, index) => (
                  <Film film={film} index={index} characters={characters} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Films;
