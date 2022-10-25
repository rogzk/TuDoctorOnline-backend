const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "TuDoctorOnline";
const URI = "mongodb+srv://"+username+":"+password+"@u34-04hades.bl8atxh.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas esta en linea");
    } catch (error) {
        console.log("Error en la conexion "+ error);
    }

    /*
    mongoose.connect(URI)
        .then((db) => { console.log("")})
        .cath((error) => { console.log("")});
    */
}

conectar();

module.exports = mongoose;