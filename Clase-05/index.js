//CREAR UNA PEQUEÑA APLICACIÓN QUE VA A PERMITIR DESDE LA LINEA DE COMANDOS CREAR USUARIOS Y LEERLOS O MOSTRARLOS!
//!👁️👁️Solo sirve para trabajar desde la linea de comandos

import { get, save } from "./fileMethods.js"
import inquirer from "inquirer"
import { promptNewUser } from "./userPrompts.js"

const main = async () => {
    let run = true
    while (run) {
        const action = await inquirer.prompt([
            //Aca va el menú, todo propio de la libreria
            {
                type: "list", //tipo lista
                name: "chosen", //elegido segun lo que pusimos
                message: "Elija por favor",
                choices: [ //Elecciones del menu arrar de objetos porque tiene un valor y nombre
                    { value: 1, name: "Obtener todos los usuarios" },
                    { value: 2, name: "Crear un nuevo usuario" },
                    { value: 99, name: "salir" }
                ]
            }
        ]); //Armamos el switch para elegir una de las opciones action, el nombre anterior
        switch (action.chosen) {
            case 1:
                await getAllUsers(); //Fn que trae todos los usuarios
                break;
            case 2:
                await createNewUser(); //Fn que crea usuarios
                break;
            case 99:
                run = false //while lo encuentra en false y sale del while
                break;
            default:
                run = false //si el usuario no hace nada, tambien run false
                break;
        }
    }
    console.log("Adios, muchas gracias por utilizar Userify😊")
}

main()


async function createNewUser() {
    console.log("Agregando nuevo usuario...")
    const newUserData = await promptNewUser()
    console.log("Creando: ", newUserData)
    const currentUsers = await get("users")
    currentUsers.push(newUserData)

    await save("users", currentUsers)
}

async function getAllUsers() {
    const currentUsers = await get("users")
    console.log(currentUsers)
}

