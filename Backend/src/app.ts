import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import {connectDb} from "./database/db"
import { userRoute } from "./routes/userRoutes"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cors({
    origin:true,
    credentials: true
}))
app.use(morgan("dev"))
app.use(helmet())
app.use(cookieParser())
app.use(userRoute)


app.listen(3000, ()=>{
    connectDb()
    console.log(`Servidor corriendo en htpp://localhost:3000`)
})