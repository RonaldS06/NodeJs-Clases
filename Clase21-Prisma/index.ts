import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    //👉Creamos una camada
    /* const camada = await prisma.camada.create({
      data: {
        nombre: 2717,
        dias: "Martes y Jueves",
        modulo: "Backend",
      },
    });

    console.log(camada); */

    //👉Creamos muchas camadas
    /*     const camadas = await prisma.camada.createMany({
      data: [
        {
          nombre: 3014,
          dias: "Miércoles y Jueves",
          modulo: "HTML Y CSS",
        },
        {
          nombre: 3117,
          dias: "Martes y Jueves",
          modulo: "Javascript",
        },
        {
          nombre: 3317,
          dias: "Lunes y Miércoles",
          modulo: "Javascript",
        },
      ],
    });
    console.log(camadas); */

    //👉Traemos todas las camadas
    /* const allCamadas = await prisma.camada.findMany();
    console.log(allCamadas); */

    //Traemos una camada por id
    /* const camadaById = await prisma.camada.findUnique({
      where: {
        id: 2,
      },
    });
    console.log(camadaById); */

    //👉Traemos camada por nombre
    /* const camadasByName = await prisma.camada.findMany({
      where: {
        dias: "Martes y Jueves",
      },
    });
    console.log(camadasByName); */

    //👉Creamos alumno
    /* const alumno = await prisma.alumno.create({
      data: {
        nombre: "Juan Perez",
        mail: "juan@gmail.com",
        edad: 25,
        camada: 2717,
      },
    });
    console.log(alumno); */

    //👉Creamos muchos alumnos
    /*     const alumnos = await prisma.alumno.createMany({
      data: [
        {
          nombre: "Paula Molina",
          mail: "paula@gmail.com",
          edad: 23,
          camada: 2817,
        },
        {
          nombre: "Romina Gomez",
          mail: "romina@hotmail.com",
          edad: 27,
          camada: 3117,
        },
      ],
    });
    console.log(alumnos); */

    //👉JOINS EN PRISMA
    /* const allAlumnos = await prisma.alumno.findMany({
      include: {
        camadas: true,
      },
    });
    console.log(allAlumnos); */

    //👉Traemos solo algunos datos de los alumnos y algunos datos de sus camadas
    const allAlumnos = await prisma.alumno.findMany({
      select: {
        nombre: true,
        mail: true,
        camadas: {
          select: {
            nombre: true,
            dias: true,
          },
        },
      },
    });
    console.log(allAlumnos);

    //Eliminar alumnos con id entre x hasta x
    const deleteAlumnos = await prisma.alumno.deleteMany({
      where: {
        id: {
          gte: 2,
          lte: 23,
        },
      },
    });
    console.log(deleteAlumnos);

    //Desconectamos de la base de datos.
    prisma.$disconnect();
  } catch (error) {
    console.log(error);
    prisma.$disconnect();
  }
};

main();
