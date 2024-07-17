import { Request, Response } from "express";
import Student, { IStudent } from "../models/students";
import Camada from "../models/camada";

//Un objeto vacío porque no recibimos ninguna información
//!Traer todos los estudiantes
export const getStudents = async ({}, res: Response) => {
  //Traeme todos lo que esté en estado true
  const condicion = { estado: true };
  //Utilizando el modelo Student, uso este método para buscar esta condición
  //?Quiero que me muestre el nombre de la camada
  const students = await Student.find(condicion).populate("camada", "nombre");

  //Cuando alguien haga un request nos retorna un objeto:
  res.json({ students });
  console.log("Estudiantes enviados");
};

//!Traer estudiante por DNI
export const getStudentByDNI = async (req: Request, res: Response) => {
  const { dni } = req.params;

  //Permite 2 tipos, de interface o null, busca que la propiedad dni encuentre
  //ese primer contenido dentro del modelo Student y lo almacena
  const student: IStudent | null = await Student.findOne({ dni: dni });

  res.json({ student });
};

//!Crear Estudiante
export const createStudent = async (req: Request, res: Response) => {
  //Tiene que tener todos los datos de la interface
  //Extraemos del request el body que es de donde viene la info del front
  const studentData: IStudent = req.body;
  //?Vamos a desestructurar para poder validar
  const { dni, nombre, camada, email } = studentData;

  //?Buscamos en el modelo Camada algún elemento que tenga en la propiedad nombre el valor de la camada, si lo encuentra, lo guarda en camadaData
  const camadaData = await Camada.findOne({ nombre: camada });

  //?Validamos
  if (!dni || !nombre || !camada || !email) {
    res.json({
      msg: "Faltan datos necesarios",
    });
    return;
  }

  //?Buscamos para que el estudiante no este repetido
  const alumnoEnDb = await Student.findOne({ dni: dni });

  if (alumnoEnDb) {
    res.json({
      msg: "El alumno ya se encuentra registrado",
    });
    return;
  }
  //Creamos una instancia del modelo Student
  const student = new Student({
    dni,
    nombre,
    email,
    camada: camadaData?._id,
  });

  await student.save();
  res.json({
    msg: "Está todo bien amigo",
    student,
  });
  console.log("Estudiante creado con éxito");
};

//!Actualizar Estudiante
export const updateStudent = async (req: Request, res: Response) => {
  // Extraemos el parámetro DNI de los parámetros de la solicitud
  const { dni } = req.params;
  //Extraemos del cuerpo de la solicitud toda la información, excepto estado y camada
  const { estado, camada, ...data } = req.body;
  // Buscamos el estudiante por dni y actualizamos su información con 'data'
  const student = await Student.findOneAndUpdate({ dni: dni }, data);
  // Enviamos la respuesta con la información del estudiante actualizado
  res.json({
    student,
  });
  console.log("Estudiante actualizado");
};

//!Eliminar Estudiante
export const deleteStudent = async (req: Request, res: Response) => {
  const { dni } = req.params;
  const student = await Student.findOneAndDelete({ dni: dni });

  //Si el estudiante no existe
  if (!student) {
    res.json({
      msg: "El estudiante no fue encontrado en la BdD",
    });
    return;
  }

  res.json({
    student,
  });
  console.log(`Estudiante con dni ${dni} eliminado`);
};
