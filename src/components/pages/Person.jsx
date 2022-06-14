import React from "react";
import { Link } from "react-router-dom";

const Person = ({ person, films }) => {

  

  const getFilmName = (link) => {
    for (let i = 0; i < films.length; i++) {
      if (films[i].url === link) {
        return films[i].title;
      }
    }
  };

  const getNumber = (link) => {
    let number = link.split("/");
    return number[5];
  };

  return (
    <div className="data-container">
      <h1 className="page-card-title">{person.name}</h1>
      <p className="page-card-text">
        <strong>Birth Year: </strong>
        <br />
        {person.birth_year}
      </p>
      <p className="page-card-first-content page-card-text">
        <strong>Height: </strong>
        <br /> {person.height} cm
      </p>
      <p className="page-card-second-content page-card-text">
        <strong>Mass: </strong>
        <br /> {person.mass}
      </p>
      <p className="page-card-third-content page-card-text">
        <strong>Hair color: </strong>
        <br />
        {person.hair_color}
      </p>
      <p className="page-card-fourth-content page-card-text">
        <strong>Skin color: </strong>
        <br />
        {person.skin_color}
      </p>
      <p
        className="page-card-fourth-content page-card-text"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <strong>Films: </strong>
        {person.films.map((film, index) => (
          <Link
            key={index}
            style={{
              textDecoration: "none",
              color: "#FFF",
              backgroundColor: "#ffd43b",
              color: "#333",
              fontSize: "2rem",
              fontWeight: "600",
              padding: "1rem",
            }}
            to={`/films/${getNumber(film)}/`}
          >
            {getFilmName(film)}
          </Link>
        ))}
      </p>
    </div>
  );
};

export default Person;
