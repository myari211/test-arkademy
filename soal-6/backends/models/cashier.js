"use strict";
module.exports = (sequelize, DataTypes) => {
  const cashier = sequelize.define(
    "cashier",
    {
      name: DataTypes.STRING
    },
    {}
  );
  cashier.associate = function(models) {
    // models.categories.hasOne(models.product);
    // associations can be defined here
  };
  return cashier;
};
