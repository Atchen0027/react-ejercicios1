import React, { useEffect } from "react";

function CambiarColorFondo() {
  const [colorFondo, setColorFondo] = React.useState("default");
  const rgbColorAleatorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };
  const handleClick = () => {
    const nuevoColor = rgbColorAleatorio();
    setColorFondo(nuevoColor);
  };
  useEffect(() => {
    document.body.style.backgroundColor = colorFondo;
  }, [colorFondo]);

  return (
    <div>
      <h2>Cambiador de color de Fondo</h2>
      <button onClick={handleClick}>Cambiar de color</button>
      <p>{colorFondo}</p>
    </div>
  );
}

export default CambiarColorFondo;
