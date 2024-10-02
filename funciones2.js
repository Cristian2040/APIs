const express = require("express");
const app = express();

// Función para devolver la fecha y hora actual
function fechaYHora() {
  const fecha = new Date();
  console.log(`Fecha y hora actual: ${fecha.toLocaleString()}`);
}

// Función de "hola"
function saludar(req, res, next) {
  console.log("Hola");
  next();
}

app.use(saludar);

app.get("/", (req, res) => {
  fechaYHora();
  res.send("Hola mundo");
});

app.get("/home", (req, res) => {
  fechaYHora();
  res.send("Estas en home");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});