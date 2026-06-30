"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      titular: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      numero: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      tipo: {
        type: Sequelize.ENUM("CORRENTE", "POUPANCA"),
        allowNull: false,
      },

      saldo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("contas");
  },
};
