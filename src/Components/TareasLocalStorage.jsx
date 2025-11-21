import React from "react";

function TareasLocalStorage() {
  const [tareas, setTareas] = React.useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [tarea, setTarea] = React.useState("");

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([
        ...tareas,
        { id: Date.now(), texto: tarea, completada: false },
      ]);
      setTarea("");
    }
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  const limpiarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
  };

  React.useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        placeholder="Añade una tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => toggleCompletada(t.id)}
            />
            <span>
              {t.texto} {t.completada ? "(Completada)" : ""}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={limpiarCompletadas}>Eliminar Completadas</button>
    </div>
  );
}

export default TareasLocalStorage;
