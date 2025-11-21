import React from "react";
import ReactDOM from "react-dom/client";
import ContadorDeClicks from "./src/Components/ContadorDeClicks.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(ContadorDeClicks)
  )
);
