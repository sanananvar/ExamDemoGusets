import express from 'express'
const app = express()
import cors from "cors"
import { config } from "dotenv"

app.use(express.json())
app.use(cors())
config()

import "./Config/config.js"
import {route} from "./Router/Router.js"
app.use("/products5",route)
app.listen(3000,()=>{
    console.log("port openned");
    
})
