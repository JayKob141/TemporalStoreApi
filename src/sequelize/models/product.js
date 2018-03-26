'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    Code: DataTypes.STRING,
    Name: DataTypes.STRING,
    Price: DataTypes.FLOAT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};