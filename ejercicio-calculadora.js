import React from "react";
import ReactDOM from "react-dom/client";
import Calculadora from "./src/Components/Calculadora.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(React.StrictMode, null, React.createElement(Calculadora))
);
