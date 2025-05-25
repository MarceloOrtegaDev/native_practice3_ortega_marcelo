import { Router } from "express";
import { registerUser, loginUser} from "../controllers/userControllers";
export const userRoute = Router();

userRoute.post("/api/register", registerUser)
userRoute.post("/api/login",loginUser)


