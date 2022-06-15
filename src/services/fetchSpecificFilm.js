import axios from 'axios'

const fetchSpecificFilm = {
  get(id) {
    return axios.get(`http://swapi.dev/api/films/${id}`)
  }
}

export default fetchSpecificFilm

