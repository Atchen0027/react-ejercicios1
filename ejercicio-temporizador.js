import React from "react";
import ReactDOM from "react-dom/client";
import Temporizador from "./src/Components/Temporizador.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(React.StrictMode, null, React.createElement(Temporizador))
);
