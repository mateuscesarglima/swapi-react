import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../layouts/navbar/NavBar";
import Loader from "../layouts/loader/Loader";
import Api from "../../services/Api";



const FilteredCharacter = () => {


  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([])
  const { id } = useParams();

  useEffect(() => {
    async function fetchFilm() {
      await Api.get(`/people/${id}/`).then(({ data }) => {
        console.log(data);
        setPeople(data)
        setLoading(false)
      });
    }
    fetchFilm();
  });


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
            <div style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                <div className="data-container">
                  <h1 className="page-card-title">{people.name}</h1>
                  <p className="page-card-text">
                    <strong>Birth Year: </strong>
                    <br />
                    {people.birth_year}
                  </p>
                  <p className="page-card-first-content page-card-text">
                    <strong>Height: </strong>
                    <br /> {people.height} cm
                  </p>
                  <p className="page-card-second-content page-card-text">
                    <strong>Mass: </strong>
                    <br /> {people.mass}
                  </p>
                  <p className="page-card-third-content page-card-text">
                    <strong>Hair color: </strong>
                    <br />
                    {people.hair_color}
                  </p>
                  <p className="page-card-fourth-content page-card-text">
                    <strong>Skin color: </strong>
                    <br />
                    {people.skin_color}
                  </p>
                  <p className="page-card-fourth-content page-card-text">
                    <strong>Films: </strong>
                    <br />
                    {people.films.map((film, index) => (
                      <Link
                        key={index}
                        style={{
                          display: "block",
                          textDecoration: "none",
                          color: "#FFF",
                        }}
                        target="_blank"
                        to={`/films/${index + 1}`}
                      >
                        {`Film ` + (index + 1)}
                      </Link>
                    ))}
                  </p>      
                </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default FilteredCharacter