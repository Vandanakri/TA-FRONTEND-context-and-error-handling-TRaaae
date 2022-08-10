import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
// import {UserContext} from "./UserContext"

// console.log(UserContext)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
