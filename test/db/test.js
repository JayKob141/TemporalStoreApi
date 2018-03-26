const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
var models = require('../../src/sequelize/models');
var Product = models.Product;
chai.should();
chai.use(chaiAsPromised);

describe('Products', function() {

  describe('Select Products', function() {

    it('should exists these products', function(done) {
      var ProductCodes = [ 'TSHIRT', 'HAT', 'PANTS' ];

      var promise = Product.findAndCountAll({ 
            where:{
                Code: ProductCodes
            }
      }).then( (result) => {
            return new Promise( (resolve,reject) => {
                resolve(result.count);
            });
      });

      promise.should.eventually.equal(3).notify(done);
    });

  });

});

