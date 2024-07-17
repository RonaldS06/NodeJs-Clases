//*1-CREAR UNA PEQUEÑA APLICACIÓN QUE VA A PERMITIR DESDE LA LINEA DE COMANDOS CREAR USUARIOS Y LEERLOS O MOSTRARLOS!

import fs from "fs"

//Creamos 2 funciones: Get y Set. Para traer y la otra para almacenar
//? file en este caso es el archivo "users" de "users.json"
//La tenemos que exportar porque lo usaremos en el index
//& readFile: Lectura de un archivo de manera asíncrona
//& Leer el contenido de un archivo JSON y devolverlo como un objeto JavaScript.
export const get = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file + ".json", "utf8", (err, content) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(content));
        });
    });
};

//& writeFile: Escritura de un archivo de manera asíncrona
//& Guardar un objeto JavaScript como un archivo JSON.
export const save = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file + ".json", JSON.stringify(content), (err) => {
            if (err) {
                reject(err);
            }
            resolve()
        })
    })
}
