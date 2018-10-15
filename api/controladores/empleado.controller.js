var empleado = require('../index').Empleado;

var empleadoController = {};

empleadoController.leer = (req, res, next) => {
    Empleado.findAll()
        .then(empleados => res.status(200).json(emplados));
}

empleadoController.actualizar = (req, res, next) => {
    console.log("Actualizar");
}

empleadoController.crear = (req, res, next) => {
    var body = req.body;
    Empleado.create({
        nombre: body.nombre,
        edad: body.edad,
        especialidad: body.especialidad
    }).then(empleado => res.status(200).json())
}

empleadoController.eliminar = (req, res, next) => {
    console.log("Eliminar");
}

module.exports = empleadoController;