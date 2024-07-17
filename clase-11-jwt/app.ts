/* import jwt from "jsonwebtoken";
//Interface
interface IObjetoAGuardar {
  id: number;
  username: string;
  isAdmin: boolean;
}
//Objeto
const objetoAGuardar: IObjetoAGuardar = {
  id: 123,
  username: "ChalesElCrack",
  isAdmin: false,
};

//Clave secreta
const miClaveSecreta = "123ChalesElCrack456";

//?Firmo el token
//const tokenFirmado = jwt.sign(objetoAGuardar, miClaveSecreta);
//console.log(tokenFirmado);

//?Creamos un función que genera token
const generarJWT = (datoAguardar: IObjetoAGuardar) => {
  return new Promise((res, rej) => {
    //Firmar el token
    jwt.sign(
      datoAguardar,
      miClaveSecreta,
      {
        expiresIn: "30m",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          rej("Se rompio todo");
        } else {
          console.log("Token generado correctamente");
          res(token);
        }
      }
    );
  });
};

(async () => {
  const respuesta = await generarJWT(objetoAGuardar);
  console.log(respuesta);
})();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6IkNoYWxlc0VsQ3JhY2siLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzIxMDAyMzczLCJleHAiOjE3MjEwMDQxNzN9.L4TI1BcDm_mryVJcicBlvYs5VMV6VgK5VR24d_PM7W0";

const dataVerificada = jwt.verify(token, miClaveSecreta);
console.log("La data está verificada:", dataVerificada);
 */

//bcryptjs -> Encriptar
import bcryptjs from "bcryptjs";
const contraseñaAEncriptar = "MiContraseñaReLoca";
//15 es la cantidad de veces que hara el hash
const salt = bcryptjs.genSaltSync(15);
console.log("salt");
console.log(salt);

const contraseniaEncriptada = bcryptjs.hashSync(contraseñaAEncriptar, salt);

console.log("Contraseña encriptada:");
console.log(contraseniaEncriptada);
