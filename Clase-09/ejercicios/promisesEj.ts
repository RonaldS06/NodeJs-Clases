import axios from "axios";

/* const getUser = (id: number) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(`Error al obtener usuario ${id}`, error));
};



Promise.all(userIds.map((id: number) => getUser(id)))
  .then((response) => console.log(response))
  .catch((error) => console.error("Error al obtener usuarios", error));
 */

const userIds: number[] = [1, 2, 3];

//? Función asincrónica que utiliza async/await para realizar múltiples solicitudes de usuario de manera concurrente.
const fetchUsersData = async (userId: number[]) => {
  try {
    //? Mapea cada ID a una promesa que realiza una solicitud HTTP GET
    const promises = userId.map(async (id: number) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data;
    });
    //? Espera a que todas las promesas se resuelvan
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error("Error al obtener usuarios", error);
    throw error; //? Propaga el error para manejarlo fuera de esta función
  }
};

//! Llama a la función y maneja los resultados o errores
fetchUsersData(userIds)
  .then((users) => {
    console.log(users); //! Array de objetos de usuario
  })
  .catch((error) => {
    console.error("Error al obtener usuarios", error);
  });
