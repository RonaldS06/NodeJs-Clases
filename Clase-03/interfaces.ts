//* Interfaces

//*Definición de una interfaz

interface Mascota {
  nombre: string;
  edad: number;
  especie: string;
}

let perro: Mascota = {
  nombre: "Firulays",
  edad: 3,
  especie: "Es un Perro",
};
let gato: Mascota = {
  nombre: "Grumpy",
  edad: 7,
  especie: "Es un Gato",
};

console.log(perro.nombre);
console.log(perro.edad);
console.log(perro.especie);
console.log(gato.nombre);
console.log(gato.edad);
console.log(gato.especie);

//*Interfaces en funciones
//Creo la interface (predefino los tipos)
interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
  multiplicar(a: number, b: number): number;
  dividir(a: number, b: number): number;
}

//defino las funciones
let calculo1: Calculadora = {
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
  multiplicar(a, b) {
    return a * b;
  },
  dividir(a, b) {
    return a / b;
  },
};

console.log(calculo1.sumar(5, 3)); //8
console.log(calculo1.restar(10, 4)); //6
console.log(calculo1.multiplicar(6, 4)); //24
console.log(calculo1.dividir(10, 2)); //5
