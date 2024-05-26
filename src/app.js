import express from "express";
const app = express();
const PUERTO = 8080;
import "./database.js";
import juguetesRouter from "./routes/juguetes.router.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
app.use("/juguetes", juguetesRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})