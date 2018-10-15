module.exports = function(sequelize, DataTypes) {
    var proyecto = sequelize.define('proyecto', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: "Primary and auto incremented key of the table"
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "Company Name"
      }
  },
  {
      underscored: true,
      freezeTableName:true,
      tableName: 'proyecto',
      classMethods:{
        associate:function(models){
          proyecto.belongsToMany(models.empleado), {
              as: 'Empleados',
              through: 'empleado_proyecto', 
              foreignkey: 'id_proyecto'
            };
        }
      },
    });
    return proyecto;
  };