import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Verificamos si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }
    //Le pasamos la contraseña y cuantas veces lo queremos hashear
    // Encriptamos la contraseña usando bcrypt
    const hashedPaswword = await bcrypt.hash(password, 10);
    // Creamos un nuevo usuario con el email y la contraseña encriptada
    const newUser = new User({ email, password: hashedPaswword });

    await newUser.save();

    res.status(201).json({
      message: "Usuario creado 💪",
      newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error del servidor😕",
    });
  }
};

//Cuando el usuario pueda loguearse
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Buscamos el usuario en la base de datos por su email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Credenciales invalidas",
      });
    }

    // Comparamos la contraseña ingresada con la contraseña del usuario en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Credenciales invalidas",
      });
    }

    //1er parámetro: Información del usuario que queremos almacenar en el token
    //2do parámetro: Firma secreta (debe estar guardada en .env)
    //El signo ! asegura al codigo que va a llegar algo si o si
    //3er parámetro: Tiempo de expiración del token (1 hora en este caso)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // Devolvemos una respuesta exitosa con el token JWT
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error del servidor" });
  }
};

export { login, register };
