'use strict';
const crypto = require('crypto');
const models = require('../models');
const User = models.User;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */

      var promise = User.create( {
          userName: 'Alfredo',
          token: crypto.randomBytes(32).toString('hex')
      }).then(any=>{

        return User.create({
            userName: 'Jacob',
            token: crypto.randomBytes(32).toString('hex')
        });

      });


      return promise;
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
