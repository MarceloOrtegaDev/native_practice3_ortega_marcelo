import { userModel } from "../models/userModel"
import {hash, genSalt, compare} from "bcrypt"
import { createJwt } from "../jwt/crearJwt/createJwt";

export const registerUserService = async (username: string, email: string, password: string) => {
    const existingUser = await userModel.findOne({ email, username });
    if (existingUser) {
      throw new Error("Ese usuario ya se encuentra registrado");
    }
    const salt = await genSalt(10);
    const myPassword = await hash(password, salt);
  
    const newUser = await userModel.create({
      username,
      email,
      password: myPassword
    });

    return newUser
    };

    export const loginUserService = async (username:string, password:string) => {
        const user = await userModel.findOne({username})
                if(!user){
                    throw new Error ("Ese usuario no se encuentra registrado")
                }
        
                const validePassword = await compare(password, user.password)
                if(!validePassword){
                    throw new Error ("Esa contraseña es incorrecta")
                }
        
                const token = await createJwt(user.id)

                return {user, token}
    }
  