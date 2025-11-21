import React from "react";

function ContadorPalabras() {
  const [contadorPalabras, setContadorPalabras] = React.useState(0);
  const [contadorCaracteres, setContadorCaracteres] = React.useState(0);

  return (
    <div>
      <h2>Contador de Palabras y caracteres</h2>
      <textarea
        placeholder="Escribe tu texto aquí..."
        onChange={(e) => {
          const texto = e.target.value;
          const palabras = texto.trim().split(/\s+/).filter(Boolean);
          setContadorPalabras(palabras.length);
          setContadorCaracteres(texto.replace(/\s/g, "").length);
        }}
      ></textarea>
      <div>
        <p>Número de palabras: {contadorPalabras}</p>
        <p>Número de caracteres: {contadorCaracteres}</p>
      </div>
    </div>
  );
}

export default ContadorPalabras;
