var express = require('express');
var router = express.Router();
var controlador = require('../controladores/empleado.controller');

router.get('/empleado', controlador.leer)
    .post('/empleado', controlador.crear)
    .put('/empleado/:id', controlador.actualizar)
    .delete('/empleado/:id', controlador.eliminar)

    module.exports = router;