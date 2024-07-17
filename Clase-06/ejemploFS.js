const fs = require("fs")

//Escribir en un archivo
fs.writeFile("archivo.txt", "En el 2do parametro va el mensaje😊", (error) => {
    if (error) {
        console.log(`Error al escribir el archivo: ${error}`)
    }
    console.log("Se ha escrito en el archivo correctamente")
})

//Leer en un archivo
fs.readFile("archivo.txt", "utf8", (error, data) => {
    if (error) {
        console.log(`Error al leer el archivo: ${error}`)
    }
    console.log(`El contenido del archivo es: ${data}`)
})


/* fs.writeFile("ruta del archivo", "datos", "callback")
fs.readFile("ruta del archivo", "codificacion", "callback") */


