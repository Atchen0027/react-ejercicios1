import React from "react";
import ReactDOM from "react-dom/client";
import CambiarColorFondo from "./src/Components/CambiarColorFondo.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(CambiarColorFondo)
  )
);
