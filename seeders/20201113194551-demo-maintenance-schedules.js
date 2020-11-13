'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MaintenanceSchedules",
      [
        {
          itemDescription: "Oil Change",
          carMiles: 5200,
          notes: "Synthetic Oil",
          carId: 2
        },
        {
          itemDescription: "Tire Change",
          carMiles: 134529,
          notes: "Discount Tire",
          carId: 1
        },
        {
          itemDescription: "Coolant Flush",
          carMiles: 134552,
          notes: "hasgadgets",
          carId: 1
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MaintenanceItems', null, {});
  }
};
