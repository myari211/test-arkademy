"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {}
  );
  product.associate = function(models) {
    models.product.hasOne(models.categories);
    models.product.hasOne(models.cashier);

    // associations can be defined here
  };
  return product;
};
