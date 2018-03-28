var Discounts = require('./discounts');


module.exports = {

    /**
     *  cart is an array with the following structure
     * [{
     *      Code: 'PANTS',
     *      quantity: 1,
     *      Price: 30
     *  },{
     *   ...
     *  }]
     * the Price on each object is the price per unit
     */
    checkout: function(cart){

        var total = 0;
        cart.forEach(element => {
           var withDiscount = Discounts.applyDiscountIfAny(element);
           total += withDiscount.subTotal;
        });

        return {
            total: total
        }
    },

}