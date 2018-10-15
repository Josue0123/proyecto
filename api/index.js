'use strict';

var Sequelize = require('sequelize');

var sequelizeConnection = new Sequelize('proyectos', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var db = {
  Sequelize: Sequelize,
  sequelize: sequelizeConnection
};

//Recupero las funciones que se declararon en los modelos
db.Empleado = db.sequelize.import('./modelos/empleado.model');
db.Proyecto = db.sequelize.import('./modelos/proyecto.model');

module.exports = db;