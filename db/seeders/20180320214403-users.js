'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      username: 'testUser',
      password: 'test',
      email: 'test20@abv.bg',
      firstName: 'Test',
      lastName: 'User',
      address: 'Ne pomnqq',
      city: 'Sofia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
