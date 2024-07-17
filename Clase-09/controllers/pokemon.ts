import { Request, Response } from "express"; // Importa los tipos Request y Response de Express
import axios from "axios"; // Importa Axios para hacer solicitudes HTTP
import { MultiplePokemonObject, Pokemon } from "../interfaces/pokemon"; // Importa interfaces

export const getPokemonByID = async (req: Request, res: Response) => {
  const { id } = req.params; // Extrae el ID del Pokémon de los parámetros de la solicitud
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); // Realiza una solicitud GET a la API para obtener datos del Pokémon con el ID especificado

  console.log("Enviando datos a la API"); // Mensaje de consola para indicar que se están enviando datos a la API

  res.json({
    data, // Envía los datos obtenidos de la API de Pokémon en la respuesta como JSON
  });
  console.log("Respuesta enviada"); // Mensaje de consola para indicar que la respuesta ha sido enviada
};

export const getSimplePokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("Petición enviada");
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const { name, order, sprites, abilities, types }: Pokemon = response.data;

  const bestImg = sprites.other?.dream_world.front_default;

  const simplePokemon = {
    name,
    order,
    bestImg,
    abilities,
    types,
  };

  res.json({
    simplePokemon,
  });

  console.log("Respuesta enviada");
};

//Extraemos multiples endpoints
export const getMultiplePokemon = async (req: Request, res: Response) => {
  const { limit = 5, offset = 0 } = req.query; //Por default dejamos que el limit sea 5 y empieze desde la pag 0
  console.log("Petición enviada 🥳");
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );

  const dataPokemonURLs: string[] = response.data.results.map(
    (pokemon: MultiplePokemonObject) => pokemon.url
  );

  // Realiza solicitudes paralelas a cada URL para obtener los datos de cada Pokémon
  /* const finalPokemonDAta = await Promise.all(
    dataPokemonURLs.map(async (url: string) => {
      const PokemonData = await axios.get(url);
      return PokemonData.data;
    })
  ); */
  //* OTRA FORMA DE HACER
  const promise = dataPokemonURLs.map(async (url: string) => {
    const dataPokemon = await axios.get(url);
    return dataPokemon.data;
  });
  const finalPokemonDAta = await Promise.all(promise);

  res.json({
    finalPokemonDAta,
  });

  console.log("Respuesta obtenida 🥳");
};

// const dataPokemonURLs = response.data.results.map((pokemon) => pokemon.url)
