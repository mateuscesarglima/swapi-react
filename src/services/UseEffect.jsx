import axios from "axios";
import { useState, useEffect } from "react";

const UseEffect = ({ url }) => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setData(data);
    });
  });

  return { data };
};

export default UseEffect;
