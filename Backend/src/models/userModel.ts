import { Schema, model } from "mongoose";
import { UserDocument } from "../interfaces/user.interface";


const userSchema = new Schema<UserDocument>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const userModel = model<UserDocument>("Usuario", userSchema);
