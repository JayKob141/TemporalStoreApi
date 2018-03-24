
var apply2byOne = function(item){
    var subTotalWithDiscount = item.Price * (Math.trunc(item.quantity / 2)) + item.Price * (item.quantity % 2);
    return subTotalWithDiscount;
}

var applyBulkPurchase = function(item, newPrice){
    return item.quantity * newPrice;
}

var Discounts = {
    'PANTS' : function(item){ 
        return {
            subTotal: apply2byOne(item),
            applied : true 
        }
    },
    'TSHIRT': function(item) {
        var withDiscount = {
            applied: false,
            subTotal: item.Price * item.quantity
        }

        if( item.quantity >= 3 ){
            withDiscount.subTotal = applyBulkPurchase(item, 19.0),
            withDiscount.applied = true
        }

        return withDiscount; 
    }
};

var applyDiscountIfAny = function(item){

    var withDiscount = {
        applied: false,
        subTotal: item.Price * item.quantity 
    }

    fnDiscount = Discounts[item.Code];
    if(typeof fnDiscount !== 'undefined'){
        withDiscount = fnDiscount(item);
    }

    return withDiscount;
}

module.exports = { 
    applyDiscountIfAny: applyDiscountIfAny
}
