'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DeliveryTypes', [{
        name: 'Collection',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Postage',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('DeliveryType', null, {});
  },
};
