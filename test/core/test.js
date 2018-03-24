var assert = require('assert');

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

    it('should apply disccount to list of products',function(){
        assert.ok(false);
    });
    
    it('should not apply disccount to list of products',function(){
        assert.ok(false);
    });

    it('should do checkout',function(){
        assert.ok(false);
    });

  });


});
