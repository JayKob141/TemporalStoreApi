'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Products', [
      {
        Code: 'PANTS',
        Name: 'Pants',
        Price: 5.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Code: 'TSHIRT',
        Name: 'T-Shirt',
        Price: 20.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Code: 'HAT',
        Name: 'Hat',
        Price: 7.5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
