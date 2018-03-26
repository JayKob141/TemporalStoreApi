var Discounts = require('./discounts');

/**
 * Los productos se definen como un objeto con los campos 
 * Code, Name, Price  
 */
module.exports = {

    /**
     * El objeto cart trae un array de objetos tipo producto, con la cantidad
     * TODO: Sanitizar el objeto cart 
     *  [ {Code:'TSHIRT'}, {Code:'TSHIRT'} ];
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