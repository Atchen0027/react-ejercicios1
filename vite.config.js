import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Definimos la lista de archivos HTML
const htmlFiles = [
  "index.html",
  "ejercicio-busqueda.html",
  "ejercicio-contador-clicks.html",
  "ejercicio-contador-palabras.html",
  "ejercicio-cambiar-color-fondo.html",
  "ejercicio-calculadora.html",
  "ejercicio-lista-dinamica.html",
  "ejercicio-generador.html",
  "ejercicio-temporizador.html",
  "ejercicio-tareas-localstorage.html",
];

export default defineConfig({
  plugins: [react()],
  base: "/accen-ejercicios-react/",

  // === PARTE CLAVE: Configuración de Múltiples Páginas (MPA) ===
  build: {
    rollupOptions: {
      input: htmlFiles.reduce((acc, file) => {
        acc[path.basename(file, ".html")] = path.resolve(__dirname, file);
        return acc;
      }, {}),
    },
  },
});
