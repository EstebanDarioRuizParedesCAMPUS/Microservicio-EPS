import express from "express";
import dotenv from 'dotenv'
import router from "./conection/routes.js";

dotenv.config()

const port = process.env.PORT 
const app = express()
const path = '/method'
const mainRouter= router

app.use(path, mainRouter)

app.use(express.json())

app.listen(port, ()=> {
    console.log(`Conectado correctamente en el puerto ${port}`);
})