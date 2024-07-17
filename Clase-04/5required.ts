interface Auto {
  marca?: string;
  modelo?: string;
  puertas?: number;
}

function crearAuto(auto: Required<Auto>): void {
  console.log(auto);
}

//uso de la funcion crearAuto con un objeto requerido
const autito: Required<Auto> = {
  marca: "Ford",
  modelo: "Mustang",
};

crearAuto(autito);


// Sii, pero no en una empresa real (no quiero sentirme presionado aun jaja) sino que es un simulacro de trabajo en el mundo IT con un equipo que se dio desde la semana 0, en mi equipo somos 7 integrantes de diferentes áreas (ux/ui, testers, frontend, backend, y la team leader) y ahora estamos desarrollando una aplicación web para presentar en 3 semanas aprox

//andamos desarrollando un proyecto que esta conformado por ciertas áreas de tecnologia(ux/ui, testers, frontend, backend) yo soy parte de frontend y un poco de ui ux para ayudar, bueno todos los dias tenemos daylis de avances que hemos hecho sobre el proyecto que presentaremos en 4 semanas y hasta ahora voy aprendiendo muchas cosas, siempre nos evalua una team leader que tiene experiencia en todo esto