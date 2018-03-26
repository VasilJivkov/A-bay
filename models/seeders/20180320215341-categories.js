'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Electronics',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Auto',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Education',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Home Furniture',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Pets',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Tools',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sports',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Office',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Games',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fashion',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Services',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Real Estate',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Health',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', [{
      name: 'Electronics',
    }, {
      name: 'Auto',
    }, {
      name: 'Education',
    }, {
      name: 'Home Furniture',
    }, {
      name: 'Pets',
    }, {
      name: 'Tools',
    }, {
      name: 'Sports',
    }, {
      name: 'Office',
    }, {
      name: 'Games',
    }, {
      name: 'Fashion',
    }, {
      name: 'Services',
    }, {
      name: 'Real Estate',

    }, {
      name: 'Health',
    }]);
  },
};
