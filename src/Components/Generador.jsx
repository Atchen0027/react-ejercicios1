import React from "react";

function Generador() {
  const [longitud, setLongitud] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  const handleChange = (e) => {
    setLongitud(e.target.value);
  };
  const handleClick = () => {
    if (longitud < 4 || longitud === "") {
      alert("La longitud debe ser mayor o igual a 4");
      return;
    }

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      password += caracteres[indice];
      setContraseña(password);
      setLongitud("");
    }

    console.log("Contraseña generada:", password);
  };

  return (
    <div>
      <h2>Generador de Contraseñas</h2>
      <input
        type="text"
        placeholder="Añade una longitud"
        value={longitud}
        onChange={handleChange}
      />
      <p>{contraseña}</p>
      <button onClick={handleClick}>Generar</button>
    </div>
  );
}

export default Generador;
