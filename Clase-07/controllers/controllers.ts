import { Request, Response } from "express";

//req es de tipo Request y res de tipo Response
//👁️Las funciones cuando no retornan nada, aclaramos que esta vacio :void
const logController = (req: Request, res: Response): void => {
  const method = req.method; //Retorna automaticamente el método (de la request saca el método o sea GET)
  const timestamp = new Date().toLocaleString(); //Nos permite capturar la fecha del sistema, lo convierte en el formato del usuario

  console.log(
    `👉[${timestamp}] Método: ${method} ejecutando el controlador de LOG` //[] Son visuales nada mas
  );

  //Armamos la respuesta, lo que le llega al usuario cuando haga el get
  //Adentro se crea el json en formato de objeto
  //El metodo json lo stringifea
  //Llega un objeto con estas 3 propiedades
  res.json({
    message: "Hola! este es un mensaje desde el controlador de LOG",
    method, //Con el metodo
    timestamp, //Con la fecha y hora
  });
};

//*Ahora hacemos el post que es muy parecido
const postController = (req: Request, res: Response): void => {
  const method = req.method;
  const timestamp = new Date().toLocaleDateString();
  console.log(`[${timestamp}] Método ${method} ejecutado`); //Aparece en consola local, consola del servidor

  //Almacenamos el saludo, dentro del request va a ir al body y busca la propiedad saludo
  const saludo = req.body.saludo;

  //Verificamos si existe
  if (!saludo) {
    console.error(`[${timestamp}] Falta el campo "saludo" en la solicitud`);
    //Esto es express 400: el servidor no puede procesar o reconocer la solicitud
    res.status(400).json({
      error: "Campo faltante",
      message: "Falta el campo 'saludo' en la solicitud",
    });
    return;
  }

  res.status(201).json({
    message: "Hola este es un mensaje desde un controlador",
    receivedSaludo: saludo,
    method,
    timestamp,
  });
};

export { logController, postController };
