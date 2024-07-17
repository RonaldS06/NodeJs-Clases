interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
}

function actualizarPersona(
  persona: Persona,
  cambios: Partial<Persona>
): Persona {
  return { ...persona, ...cambios };
}

//Uso de la funcion actualizarPersona con un objeto parcial
const alumno: Persona = {
  nombre: "Juan",
  edad: 25,
  direccion: "Zurita 303",
};
//Con Partial<Persona> autorizo que la variable "cambios" tenga algunas de las propiedades de la Interfaz sin tirar error
const cambios: Partial<Persona> = {
  nombre: "Horacio",
};

const estudianteActualizado = actualizarPersona(alumno, cambios);
console.log(estudianteActualizado);


