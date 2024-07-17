//!2-Creamos los props, para el menu con el cual vamos a poder elegir que hacer basandonos en la libreria que instalamos inquirer
//!👁️👁️Solo sirve para trabajar desde la linea de comandos

import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt"

inquirer.registerPrompt("date", DatePrompt)

//Creamos un fn asyncronica para que solamente retorne una vez que haya recibido esto, porque el inquirer trabaja de forma asyncronica
export async function promptNewUser() {
    return await inquirer.prompt(newUserPrompt)
}

//Cada objeto tiene 3 propiedades: type, name y message
const newUserPrompt = [
    {
        type: "input",
        name: "document",
        message: "Ingrese su DNI:"
    },
    {
        type: "input",
        name: "full_name",
        message: "Ingrese su nombre completo"
    },
    {
        type: "date",
        name: "birth",
        message: "Ingrese su fecha de nacimiento",
        locale: "es-US",
        format: { month: "short", hour: undefined, minute: undefined }
    },
    {
        type: "input",
        name: "nationality",
        message: "Ingrese su nacionalidad"
    }
]

