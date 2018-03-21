'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
        name: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Auto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '101 sessions',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Home Furniture',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tools',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Office',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Games',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fashion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Services',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Real Estate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Health',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
