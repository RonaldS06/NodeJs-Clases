import express from "express";
import {
  getMultiplePokemon,
  getPokemonByID,
  getSimplePokemonById,
} from "./controllers/pokemon"; // Importa la función que maneja la lógica para obtener un Pokémon por ID

const app = express(); // Crea una instancia de Express
const PORT = 8080; // Define el puerto en el que el servidor escuchará las solicitudes

app.use(express.json()); // Middleware para analizar cuerpos JSON en las solicitudes

app.get("/pokemon/full/:id", getPokemonByID); // Define una ruta GET que utiliza el controlador getPokemonByID

app.get("/pokemon/simple/:id", getSimplePokemonById);

app.get("/pokemon/multiple", getMultiplePokemon);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`); // Inicia el servidor y escucha en el puerto definido
});
