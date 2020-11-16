'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MaintenanceSchedule.belongsTo(models.Car, { foreignKey: "carId" })
    }
  };
  MaintenanceSchedule.init({
    itemDescription: DataTypes.STRING,
    carMiles: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MaintenanceSchedule',
  });
  return MaintenanceSchedule;
};