var models = require('../sequelize/models');
var Product = models.Product;

module.exports = {
    readProducts: () => {
        var promise = Product.findAll({raw:true});
        return promise;
    }
}