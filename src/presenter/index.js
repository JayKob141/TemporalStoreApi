var models = require('../sequelize/models');
var Product = models.Product;
var User = models.User;
const Core = require('../core');

module.exports = {
    readProducts: () => {
        var promise = Product.findAll({raw:true});
        return promise;
    },

    readUserByAuthToken: (token)=>{
        return User.findOne({
            where:{
                token: token
            },
            raw: true
        });
    },

    // arrayOfCodes comes in form ['CODE1','CODE2']
    checkout: (arrayOfCodes) => {
        var codes = {};

        arrayOfCodes.forEach(element => {
            if(typeof(codes[element]) !== 'undefined' ){
                codes[element].quantity += 1;
            }else{
                codes[element] = {
                    Code: element,
                    quantity: 1
                }
            }
        });

        var cartProductCodes = Object.keys(codes);

        var promise = Product.findAll({
            where:{
                Code: cartProductCodes
            },
            raw:true
        }).then(result=>{

            result.forEach(element => {
               codes[element.Code].Price = element.Price; 
            });

            cart = cartProductCodes.map((value)=>{
                return codes[value];
            });

            var response = Core.checkout(cart);

            return new Promise((resolve,reject)=>{
                resolve(response);
            });
        });

        return promise;

    }
}