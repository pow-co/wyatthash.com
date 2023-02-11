'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TokenRewardPayments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      txid: {
        type: Sequelize.STRING
      },
      txhex: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.TEXT
      },
      payees: {
        type: Sequelize.JSON
      },
      total: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TokenRewardPayments');
  }
};