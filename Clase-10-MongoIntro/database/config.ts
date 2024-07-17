import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      "mongodb+srv://pizarroronald06:16UpVKkn5ZHa9lkr@ronald.0vlxaoo.mongodb.net/"
    );
    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar la BdD");
  }
};
