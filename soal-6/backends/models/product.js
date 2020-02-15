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
    models.product.belongsTo(models.categories);
    models.product.belongsTo(models.cashier);

    // associations can be defined here
  };
  return product;
};
