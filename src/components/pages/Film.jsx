import React from "react";
import { Link } from "react-router-dom";

const Film = ({ film, index, characters }) => {
  let char = Array.from(characters);
  console.log(char);

  const getNumber = (link) => {
    let number = link.split("/");
    return number[5];
  };

  return (
    <div className="data-container" key={index}>
      <h1 className="page-card-title">{film.title}</h1>
      <p className="page-card-text">
        <strong>Director: </strong> <br />
        {film.director}
      </p>
      <p className=" page-card-text">
        <strong>Producer: </strong> <br /> {film.producer}
      </p>
      <p className="page-card-text">
        <strong>Opening craw: </strong> <br />
        {film.opening_crawl}
      </p>
      <p
        className="page-card-text"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <strong>Characters: </strong>
        {film.characters.map((character, index) => (
          <Link
            target="_blank"
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
            to={`/people/${getNumber(character)}`}
          >
            {getNumber(character) >= 17
              ? char[getNumber(character) - 2]
              : char[getNumber(character) - 1]}

          </Link>
        ))}
      </p>
    </div>
  );
};

export default Film;
