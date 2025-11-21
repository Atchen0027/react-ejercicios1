import React from "react";

function Calculadora() {
  const [valor1, setValor1] = React.useState("");
  const [valor2, setValor2] = React.useState("");
  const [resultado, setResultado] = React.useState(0);

  const handleValor1 = (event) => {
    setValor1(Number(event.target.value));
  };

  const handleValor2 = (event) => {
    setValor2(Number(event.target.value));
  };

  const handleSumar = () => {
    setResultado(valor1 + valor2);
  };
  const handleRestar = () => {
    setResultado(valor1 - valor2);
  };
  const handleMultiplicar = () => {
    setResultado(valor1 * valor2);
  };
  const handleDividir = () => {
    if (valor2 !== 0) {
      setResultado(valor1 / valor2);
    } else {
      setResultado("Error: Division por cero");
    }
  };
  return (
    <div>
      <h2>Calculadora</h2>
      <input
        type="number"
        value={valor1}
        onChange={handleValor1}
        placeholder=""
      />
      <input
        type="number"
        value={valor2}
        onChange={handleValor2}
        placeholder=""
      />
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleMultiplicar}>Multiplicar</button>
      <button onClick={handleDividir}>Dividir</button>
      <button
        onClick={() => {
          setValor1("");
          setValor2("");
          setResultado(0);
        }}
      >
        Limpiar
      </button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Calculadora;
