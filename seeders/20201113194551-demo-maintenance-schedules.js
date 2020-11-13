'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MaintenanceSchedules",
      [
        {
          itemDescription: "Oil Change",
          carMiles: 5200,
          notes: "Synthetic Oil",
        },
        {
          itemDescription: "Tire Change",
          carMiles: 134529,
          notes: "Discount Tire",
        },
        {
          itemDescription: "Coolant Flush",
          carMiles: 134552,
          notes: "hasgadgets",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MaintenanceItems', null, {});
  }
};
