//!Creamos una clase donde vamos adefinir todas las funciones
//!que tiene que hacer el servidor de una forma más ordenada

import express, { Express } from "express"; //Express es la instancia de express que ejecutamos siempre
import studentRoutes from "../routes/students";
import { conectarDB } from "../database/config";
import camadaRoutes from "../routes/camadas";

//? Creamos la clase
export class Server {
  app: Express; //para que app sea del tipo Express

  constructor() {
    this.app = express();
    this.conexionaDB();
    this.middlewares();
    this.routes();
  }

  //& Ninguna retorna nada, sólo ejecuta.
  async conexionaDB(): Promise<void> {
    await conectarDB();
  }

  middlewares(): void {
    this.app.use(express.json()); //Lo que haciamos anteriormente
  }

  routes(): void {
    this.app.use("/students", studentRoutes);
    this.app.use("/camadas", camadaRoutes);
  }

  listen(): void {
    this.app.listen(8080, () => {
      console.log("Servidor iniciado en puerto 8080");
    });
  }
}
