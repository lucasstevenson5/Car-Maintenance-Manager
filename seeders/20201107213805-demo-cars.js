'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Cars",
      [
        {
          year: 2006,
          make: "Honda",
          model: "Accord",
          image: "https://www.iihs.org/api/ratings/model-year-images/2355",
          user_id: 1
        },
        {
          year: 2008,
          make: "Hyundai",
          model: "Accent",
          image: "https://m.media-amazon.com/images/I/71anPDwyZML.jpg",
          user_id: 2
        },
        {
          year: 2015,
          make: "McLaren",
          model: "P1",
          image: "https://cdn1.mecum.com/auctions/fl0120/fl0120-397374/images/1-1572280905883@2x.jpg?1577392437000",
          user_id: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
