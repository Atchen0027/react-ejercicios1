// vite.config.js
// ...
import path from "path";

const htmlFiles = [
  "index.html",
  // ... tu lista de html
];

// Crea la lista de archivos de entrada JS/TS, asumiendo que ahora están en src/
const jsInputFiles = htmlFiles.reduce((acc, file) => {
  const name = path.basename(file, ".html");
  // La ruta debe apuntar a la nueva ubicación en src/
  acc[name] = path.resolve(__dirname, "src", name + ".js");
  return acc;
}, {});

export default defineConfig({
  plugins: [react()],
  base: "/react-ejercicios1/",

  build: {
    rollupOptions: {
      input: {
        // Combina los archivos HTML (para la salida) y los archivos JS (como puntos de entrada)
        ...jsInputFiles,
        ...htmlFiles.reduce((acc, file) => {
          acc[path.basename(file, ".html")] = path.resolve(__dirname, file);
          return acc;
        }, {}),
      },
    },
  },
});
