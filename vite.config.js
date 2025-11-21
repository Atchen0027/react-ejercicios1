import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
  base: "/react-ejercicios1/",

  build: {
    rollupOptions: {
      input: htmlFiles.reduce((acc, file) => {
        acc[path.basename(file, ".html")] = path.resolve(__dirname, file);
        return acc;
      }, {}),
    },
  },
});
