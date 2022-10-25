//Archivo de arranque
//IMPORTACION DE LIBRERIAS
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./conexion");

//CONFIGURACION
const app = express();
    //Variable de entorno
const env = process.env;
    //Se asigna el puerto de trabajo
const port = env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//ARRANQUE
app.listen(port, () => {
    console.log("API iniciado en el puerto " + port);
});

//RUTAS
app.get("/", (req, res) => {
    res.send("API iniciado");
})

app.use("/doctores", require("./rutas/DoctorRutas"));