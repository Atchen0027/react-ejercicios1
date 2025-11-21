import React from "react";
import ReactDOM from "react-dom/client";
import ContadorPalabras from "./src/Components/ContadorPalabras.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(ContadorPalabras)
  )
);
