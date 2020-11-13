'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MaintenanceItems",
      [
        {
          item_description: "Oil Change",
          car_miles: 5200,
          notes: "Synthetic Oil",
          car_id: 5
        },
        {
          item_description: "Tire Change",
          car_miles: 134529,
          notes: "Discount Tire",
          car_id: 1
        },
        {
          item_description: "Coolant Flush",
          car_miles: 134552,
          notes: "hasgadgets",
          car_id: 1
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MaintenanceItems', null, {});
  }
};
