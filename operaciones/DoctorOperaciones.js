//CRUD Backend
const DoctorModelo = require("../modelos/DoctorModelo");
const DoctorOperaciones = {};

DoctorOperaciones.crearDoctor = async(req, res) => {
    try {
        /*
        const objeto = {
            documento: 1000000000,
            idTarjetaProfesional: 1000000000,
            nombres: "Kevin Ferney",
            apellidos: "Grisales Rodriguez",
            especialidad: "Neurologia",
            telefono: 3001231203,
            correoElectronico: "correo@gmail.com",
            imagen: "imagen.jpg"
        }
        */
        const objeto = req.body;

        const doctor = new DoctorModelo(objeto);
        const doctorGuardado = await doctor.save();
        if(doctorGuardado != null){
            res.status(201).send(doctorGuardado);
        }
    } catch (error) {
        res.status(400).send("Mala peticion " + error);
    }

}

DoctorOperaciones.consultarDoctores = async(req, res) => {
    try {
        const filtro = req.query; //Guarda la consulta
        //Se va a realizar un filtro especifico
        let listaDoctores;
        if(filtro.nombres != null){
            const listaDoctores = await DoctorModelo.find({
                "$or" : [ 
                    {"nombres": { $regex:filtro.nombres, $options:"i" }} //Busqueda por contenido de string
                ]
            });
        }else{
            listaDoctores = await DoctorModelo.find();
        }
        
        if (listaDoctores.length > 0){
            res.status(200).send(listaDoctores); //200 = Encontro informacion en BD   
        }else{
            res.status(404).send("No hay datos");
        }    
    } catch (error) {
        res.status(400).send("Mala peticion " + error); //400 = No encontro la informacion en BD
    }
}
DoctorOperaciones.consultarDoctor = async(req, res) => {
    try {
        const id = req.params.id;
        const doctor = await DoctorModelo.findById(id);
        if (doctor != 0){
            res.status(200).send(doctor); //200 = Encontro informacion en BD   
        }else{
            res.status(404).send("No hay datos");
        }    
    } catch (error) {
        res.status(400).send("Mala peticion " + error); //400 = No encontro la informacion en BD
    }
}

DoctorOperaciones.modificarDoctor = async(req, res) => {
    try {
        const id = req.params.id;
        const objeto = req.body;
            const Doctor = {
                documento: objeto.documento,
                idTarjetaProfesional: objeto.idTarjetaProfesional,
                nombres: objeto.nombres,
                apellidos: objeto.apellidos,
                especialidad: objeto.especialidad,
                telefono: objeto.telefono,
                correoElectronico: objeto.correoElectronico,
                imagen: objeto.imagen
            } //Se pasan los parametros a modificar, proteger campos

            const DoctorModificado = await DoctorModelo.findByIdAndUpdate(id, Doctor, { new: true }); //Devuelve el objeto actualizado
        if (DoctorModificado != null){
            res.status(200).send(DoctorModificado);
        }
    } catch (error) {
            res.status(400).send("Mala peticion " + error);
    }
}

DoctorOperaciones.eliminarDoctor = async(req, res) => {
    try {
        const id = req.params.id;
        const doctorBorrado = await DoctorModelo.findByIdAndDelete(id);
        res.status(200).send(doctorBorrado);
    } catch (error) {
        res.status(400).send("Mala peticion " + error);
    }
}

module.exports = DoctorOperaciones;