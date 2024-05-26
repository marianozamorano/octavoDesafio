import mongoose from "mongoose";
import { error } from "pdf-lib";

mongoose.connect("mongodb+srv://mjzamorano84:coderhouse@cluster0.enkrkrl.mongodb.net/Jugueteria?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la DB"))
    .catch((error) => console.log("No nos podemos conectar por este error: ", error))