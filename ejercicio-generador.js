import React from "react";
import ReactDOM from "react-dom/client";
import Generador from "./src/Components/Generador.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(React.StrictMode, null, React.createElement(Generador))
);
