'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.Users, { foreignKey: "userId" })
      Car.hasMany(models.MaintenanceItem, { foreignKey: "carId" })
      Car.hasMany(models.MaintenanceSchedule, { foreignKey: "carId" })
    }
  };
  Car.init({
    year: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};