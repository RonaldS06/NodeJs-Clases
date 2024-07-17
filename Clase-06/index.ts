interface Empleado {
  id: number;
  nombre: string;
  cargo: string;
  sueldo: number;
}

class ClaseEmpleado implements Empleado {
  constructor(
    public id: number,
    public nombre: string,
    public cargo: string,
    public sueldo: number
  ) {
    /* this.id = id;
    this.nombre = nombre;
    this.cargo = cargo;
    this.sueldo = sueldo; */
    //Esto en Ts ya no se hace
  }
}

class ClaseDirector extends ClaseEmpleado {
  //&Ya no hace falta el public porque lo heredamos de ClaseEmpleado
  constructor(
    id: number,
    nombre: string,
    cargo: string,
    sueldo: number,
    public area: string //*Creamos 1 mas (area) para ClaseDirector
  ) {
    super(id, nombre, cargo, sueldo);
  }
  //!creamos un metodo
  contratar(nuevoEmpleado: Empleado) {
    console.log(
      `Contratando un nuevo empleado ${nuevoEmpleado.nombre} para el área de ${this.area}`
    );
  }
}

const empleado1: ClaseEmpleado = new ClaseEmpleado(
  7271,
  "Ronald",
  "Desarrollador Full Stack",
  9500
);

const empleado2: Empleado = new ClaseEmpleado(
  9488,
  "Milton",
  "Delivery Rappi",
  400
);

//!En este caso si ponemos --: ClaseDirector, ya que tiene un método
const director1: ClaseDirector = new ClaseDirector(
  130,
  "Pedro",
  "Director",
  900,
  "Desarrollo Web"
);
director1.contratar(empleado1);
console.table(director1);

/* console.log("Datos del empleado");
console.log(`Id: ${empleado1.id}`);
console.log(`Nombre: ${empleado1.nombre}`);
console.log(`Cargo: ${empleado1.cargo}`);
console.log(`Sueldo: ${empleado1.sueldo}`);

console.log("Datos del empleado");
console.log(`Id: ${empleado2.id}`);
console.log(`Nombre: ${empleado2.nombre}`);
console.log(`Cargo: ${empleado2.cargo}`);
console.log(`Sueldo: ${empleado2.sueldo}`);

console.table(empleado1);
console.table(empleado2); */
