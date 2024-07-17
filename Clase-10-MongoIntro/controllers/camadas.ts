import { Request, Response } from "express";
import Camada, { ICamada } from "../models/camada";

export const createCamada = async (req: Request, res: Response) => {
  //Extraemos la request que el usuario mandó para validar la info
  const camadaData: ICamada = req.body;
  //Ya esta parseado
  const { nombre, diasDeCursada, modulo } = camadaData;

  //Validaciones
  //?Estan todos los campos requeridos?
  if (!nombre || !diasDeCursada || !modulo) {
    res.json({
      msg: "Faltan datos necesarios para almacenar la camada",
    });
    return;
  }

  //?Para que no se repita la camada usamos como validación:
  const camadaEnDb = await Camada.findOne({ nombre: nombre });

  if (camadaEnDb) {
    res.json({
      msg: "La camada ya existe",
    });
    return;
  }
  //Almacenamos en el modelo Camada. Imaginemos que creamos un objeto de clase Camada
  const camada = new Camada(camadaData);
  //va a estar esperando que camada se guarde con el metodo save
  await camada.save();

  res.json({
    msg: "La camada se guardó correctamente",
    camada,
  });
  console.log("Camada creada exitosamente");
};
