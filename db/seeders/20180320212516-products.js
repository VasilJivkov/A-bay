'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      id: 1,
      title: 'Samsung Galaxy S9',
      desc: 'Edge screen.',
      price: 1890.90,
      picture: 'http://www.samsung.com/global/galaxy/galaxy-s9/design/images/galaxy-s9_design_box_l.jpg',
      status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date(),
      fk_city_id: 1,
      fk_user_id: 1,
      fk_category_id: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
