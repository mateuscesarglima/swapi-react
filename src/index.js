import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./queries.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
