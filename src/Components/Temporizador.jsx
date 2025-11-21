import React from "react";

function Temporizador() {
  const [temporizador, setTemporizador] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const segundos = Math.floor(temporizador % 60);
  const minutos = Math.floor((temporizador % 3600) / 60);
  const horas = Math.floor(temporizador / 3600);
  const formatoTiempo = `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

  React.useEffect(() => {
    let intervalo = null;
    if (activo) {
      intervalo = setInterval(() => {
        setTemporizador((prevTemporizador) => prevTemporizador + 1);
      }, 1000);
    } else if (!activo && temporizador !== 0) {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, temporizador]);

  const handleInicio = () => {
    setActivo(true);
  };

  const handlePausa = () => {
    setActivo(false);
  };

  const handleReset = () => {
    setActivo(false);
    setTemporizador(0);
  };
  return (
    <div>
      <h2>Temporizador</h2>
      <p>{formatoTiempo}</p>
      <button onClick={handleInicio}>Iniciar</button>
      <button onClick={handlePausa}>Pausa</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default Temporizador;
