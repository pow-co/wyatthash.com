'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TokenRewardPayees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      txid: {
        type: Sequelize.STRING
      },
      paymail: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      script: {
        type: Sequelize.STRING
      },
      satoshis: {
        type: Sequelize.INTEGER
      },
      vout: {
        type: Sequelize.INTEGER
      },
      tokens: {
        type: Sequelize.DECIMAL
      },
      total_tokens: {
        type: Sequelize.DECIMAL
      },
      total_satoshis: {
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
    await queryInterface.dropTable('TokenRewardPayees');
  }
};