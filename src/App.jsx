import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";
import Starships from "./components/pages/Starships";
import Species from "./components/pages/Species";
import Vehicles from "./components/pages/Vehicles";
import Films from "./components/pages/Films";
import FilteredFilms from "./components/pages/FilteredFilms";
import FilteredCharacter from "./components/pages/FilteredCharacter";
import { useEffect, useState } from "react";
import Api from "./services/Api";

function App() {

  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  let arr = []

  useEffect(() => {
    Api.get(`/films/`)
      .then(({ data }) => {
        setFilms(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    async function fetchPeople() {
      for (let i = 1; i <= 83; i++) {
        if (i === 17) {
          continue;
        }
        await Api.get(`/people/${i}/`).then(({ data }) => {
          if(!arr.some((obj) => obj.name === data.name)){
            arr.push({
              name: data.name,
              url: data.url
            })
          }
        });
      }
      setCharacters(arr);
    }
    fetchPeople();
  }, []);

  console.log(characters)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/people" element={<People films={films} />} />
        <Route
          exact
          path="/people/:id"
          element={<FilteredCharacter films={films} />}
        />
        <Route exact path="/films" element={<Films />} />
        <Route exact path="/films/:id" element={<FilteredFilms people={characters}/>} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/starships" element={<Starships />} />
        <Route exact path="/species" element={<Species />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  );
}

export default App;
