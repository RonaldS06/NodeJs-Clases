type Coordenadas = {
  x: number;
  y: number;
};

type Color = "rojo" | "verde" | "azul"; //Esto ya esta restringido

type Punto = Coordenadas & {
  color: Color; //La propiedad color, solo guarda uno de los 3
  otracolor?: Color;
};

const punto: Punto = {
  x: 10,
  y: 20,
  color: "rojo", //Solo puede ir rojo, verde o azul
};
console.log(punto);

interface Animal {
  nombre: string;
  comer(): void; //void es vacio, no retornará nada por lo tanto de indicara luego
}

interface Mascota extends Animal {
  jugar(): void;
}

//& La interfaz MASCOTA tendra la propiedad "nombre" y el método comer() heredado de ANIMAL y además el método jugar()

class Perro implements Mascota {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  jugar(): void {
    console.log(`${this.nombre} esta jugando`);
  }
  comer(): void {
    console.log(`${this.nombre} esta comiendo`);
  }
}

const miPerro = new Perro("Bethoben");
miPerro.jugar();
miPerro.comer();


