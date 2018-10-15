module.exports = function(sequelize, DataTypes) {
    var empleado = sequelize.define('empleado', {
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
        comment: "Company Name",
        edad:{
            type: DataTypes.INTEGER
        },
        especialidad:{
            type: DataTypes.ENUM('BACK', 'FRONT'),
        }
      }
  },
  {
      underscored: true,
      freezeTableName:true,
      tableName: "empleado",
      classMethods:{
        associate:function(models){
          empleado.belongsToMany(models.proyecto), {
              as: 'Proyectos',
              through: 'empleado_proyecto', 
              foreignkey: 'id_empleado'
            };
        }
      },
    });
    return empleado;
  };