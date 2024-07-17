const sumar = (a: number, b: number): number => a + b;
console.log(sumar(5, 6));

const objeto = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Bienvenido ${this.nombre}`);
  },
};

objeto.saludar();
