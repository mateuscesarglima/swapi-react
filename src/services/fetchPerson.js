import axios from "axios";

const fetchPerson = {
  get(link) {
    return axios.get(link);
  },
};

export default fetchPerson;
