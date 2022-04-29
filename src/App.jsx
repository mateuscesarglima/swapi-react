
import { Route, Routes } from "react-router-dom"; 
import Home from "./components/pages/Home";
import People from "./components/pages/People"
import Planets from "./components/pages/Planets"
import Starships from "./components/pages/Starships"
import Species from "./components/pages/Species"
import Vehicles from "./components/pages/Vehicles"

function App() {
  // const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://swapi.dev/api/people/")
  //     .then((response) => {
  //       setFilms(response.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log(films);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/people" element={<People />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/starships" element={<Starships />} />
        <Route exact path="/species" element={<Species />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  );
}

export default App;
