import mongoose from "mongoose";
const mongoUrl:string = "mongodb://localhost:27017/";

export const connectDb = async(): Promise<void> => {
    try {
        await mongoose.connect(mongoUrl)
        console.log("Conectado a la base de datos.")
    } catch (error) {
        console.log(error)
    }
}

