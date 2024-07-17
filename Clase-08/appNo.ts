import http from "http";
const PORT = 8080;

const server = http.createServer(async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ msg: "Hola! Soy el home!" })); //Lo que se vera en pantalla
    res.end();
    console.log(`Petición ${req.method} concretada`);
    return;
  }

  if (req.url === "/anidado" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ msg: "Yo soy una ruta anidada" })); //Lo que se vera en pantalla
    res.end();
    console.log(`Petición ${req.method} concretada`);
    return;
  }

  if (req.url === "/" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ msg: "Yo soy un POST" })); //Lo que se vera en pantalla
    res.end();
    console.log(`Petición ${req.method} concretada`);
    return;
  }

  res.writeHead(400, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ msj: "Acá no hay nada!" })); //Lo que se vera en pantalla
  res.end();
  return;
});

//Que escuche el servidor
server.listen(PORT, () => {
  console.log("Servidor escuchando el puerto " + PORT);
});
