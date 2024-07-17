import express from "express";
const app = express();
const PORT = 8080;
// Servir contenido estático
app.use(express.static("public"));

/* app.get("/", (req, res) => {
  res.send("Hola! soy el home");
}); */

app.get("/pruebita", (req, res) => {
  res.sendfile(__dirname + "/public/prueba.html");
});

app.get("/otra-prueba", (req, res) => {
  res.sendfile(__dirname + "/public/otraPrueba.html");
});

app.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT}`);
});
