import { Schema, model, Model } from "mongoose";
//Primero creo la interface
interface IUser {
  email: string;
  password: string;
}
//Defino la estructura del schema en base a esta interface
const SchemaUser = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<IUser> = model<IUser>("User", SchemaUser);
export default User;
