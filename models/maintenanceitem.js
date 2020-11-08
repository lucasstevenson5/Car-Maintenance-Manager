'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MaintenanceItem.belongsTo(models.Car, { foreignKey: "carId" })
    }
  };
  MaintenanceItem.init({
    itemDescription: DataTypes.STRING,
    carMiles: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    carId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MaintenanceItem',
  });
  return MaintenanceItem;
};