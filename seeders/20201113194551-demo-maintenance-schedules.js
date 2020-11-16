'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MaintenanceSchedules",
      [
        {
          itemDescription: "Oil Change",
          carMiles: 3000,
          notes: "or 3 months",
          carId: 1
        },
        {
          itemDescription: "Tire Change",
          carMiles: 50000,
          notes: "Discount Tire",
          carId: 1
        },
        {
          itemDescription: "Coolant Flush",
          carMiles: 60000,
          notes: "",
          carId: 1
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MaintenanceSchedules', null, {});
  }
};
