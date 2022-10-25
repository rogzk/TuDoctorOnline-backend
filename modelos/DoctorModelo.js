const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema({
    documento: {type: Number, min: 11, required: true, unique: true},
    idTarjetaProfesional : {type: Number, min: 10, required: true, unique: true},
    nombres: {type: String, maxLength: 40, required: true, unique: false},
    apellidos: {type: String, maxLength: 40, required: true, unique: false},
    especialidad: {type: String, maxLength: 40, required: true, unique: false},
    telefono: {type: Number, min: 11, required: true, unique: false},
    correoElectronico: {type: String, maxLength: 40, required: true, required: true, unique: true}, 
    imagen: {type: String, maxLength: 40, required: true, unique: true} 
    });
//Exportar el modelo
module.exports = mongoose.model("Doctor", DoctorSchema); //Protocolo: Primera letra en mayuscula