import { Request,Response } from "express"
import { registerUserService, loginUserService } from "../services/user.services"
import { User } from "../interfaces/user.interface";


export const registerUser = async (req: Request<{}, {}, User>, res: Response): Promise<void> => {
    try {
      const { username, email, password } = req.body;
      await registerUserService(username, email, password);
      res.status(201).json({msg: "Usuario registrado correctamente"});
    } catch (error) {
      res.status(400).json({ msg: "El correo o el nombre de usuario ya se encuentra registrado, intente de nuevo." });
    }
  };

  export const loginUser = async (req: Request<{}, {}, Pick<User, "username" | "password">>, res: Response): Promise<void> => {
    try {
        const {username, password} = req.body
        const {token} = await loginUserService(username, password)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        })

      res.status(201).json({msg:"Inicio de sesión exitoso."})
    } catch (error) {
      res.status(400).json({msg:"No se pudo iniciar la sesión"})
    }
}
