import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }
    //Le pasamos la contraseña y cuantas veces lo queremos hashear
    const hashedPaswword = await bcrypt.hash(password, 10);
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
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Credenciales invalidas",
      });
    }

    //compara la contraseña del usuario con la que encontro en la BdD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Credenciales invalidas",
      });
    }

    //1er parámetro: La información que quiero guardar en el token
    //2do parámetro: Es la firma, el password secreto que esta en .env (JWT_SECRET)
    //El signo ! asegura al codigo que va a llegar algo si o si
    //3er parámetro: Tiempo de expiración (optional)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error del servidor" });
  }
};

export { login, register };
