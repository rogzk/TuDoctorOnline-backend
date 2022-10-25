const DoctorOperaciones = require("../operaciones/DoctorOperaciones");
const router = require('express').Router();

router.get("/", DoctorOperaciones.consultarDoctores); //Obtener todos los datos
router.get("/:id", DoctorOperaciones.consultarDoctor); //Buscar por id
router.post("/", DoctorOperaciones.crearDoctor); //Guardar informacion
router.put("/:id", DoctorOperaciones.modificarDoctor) //Modificar informacion
router.delete("/:id", DoctorOperaciones.eliminarDoctor) //Eliminar informacion
module.exports = router;