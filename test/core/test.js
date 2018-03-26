var assert = require('assert');
var Core = require('../../src/core');
var Discounts = require('../../src/core/discounts');

var productList;

describe('Products', function() {

  beforeEach(function() {
    productList = ['PANTS', 'TSHIRT', 'HAT'];
  });

  describe('Select Products', function() {

    it('should contains valid products', function() {
      var order = [ { Code: 'PANTS' }, { Code: 'TSHIRT' } ];

      order.forEach(function(element){
        assert.ok( productList.indexOf(element.Code) >= 0 );
      });

    });

    it('should apply 2x1 disccount to PANTS',function(){
        var item = {
          Code: 'PANTS',
          quantity: 3,
          Price: 5.0
        }

        var response = Discounts.applyDiscountIfAny(item);
        var subtotal = response.subTotal;
        assert.equal(subtotal, 10, "The subtotal is not correct");
    });

    it('should apply bulk disccount to TSHIRT',function(){
        var item = {
          Code: 'TSHIRT',
          quantity: 4,
          Price: 20.0
        }

        var response = Discounts.applyDiscountIfAny(item);
        var subtotal = response.subTotal;
        assert.equal(subtotal, 76, "The subtotal is not correct");
    });
    
    it('should not apply disccount to list of products',function(){

        var productList = [
          { Code:'PANTS', Price: 5.0, quantity: 1 },
          { Code:'TSHIRT', Price: 20.0, quantity: 1 },
          { Code:'HAT', Price: 7.5, quantity: 1 }
        ];

        var response = 0;
        response = Core.checkout(productList);
        assert.equal(response.total, 32.5, "The total ("+response.total+") is not correct");
    });

  });


});
