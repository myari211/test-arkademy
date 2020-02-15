"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      CashierId: {
        type: Sequelize.INTEGER,
        // onDelete: "CASCADE",
        allowNull: false,
        foreignKey: true,
        references: {
          model: "cashiers",
          key: "id"
        }
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        // onDelete: "CASCA DE",
        allowNull: false,
        references: {
          model: "categories",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("products");
  }
};
