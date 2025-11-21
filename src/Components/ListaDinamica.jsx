import React from "react";

function ListaDinamica() {
  const [lista, setLista] = React.useState([]);
  const [elemento, setElemento] = React.useState("");

  const handleChange = (e) => {
    setElemento(e.target.value);
  };

  const agregarElemento = () => {
    if (elemento.trim() !== "") {
      setLista([...lista, elemento]);
      setElemento("");
    }
  };

  const eliminarElemento = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };
  return (
    <div>
      <h2>Lista Dinamica</h2>
      <input
        type="text"
        value={elemento}
        onChange={handleChange}
        placeholder="Escribe aqui..."
      />
      <button onClick={agregarElemento}>Agregar</button>

      <ul>
        {lista.map((elemento, index) => (
          <>
            <li key={index}>
              {elemento}
              <button onClick={() => eliminarElemento(index)}>Eliminar</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default ListaDinamica;
