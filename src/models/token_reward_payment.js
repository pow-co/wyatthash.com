'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TokenRewardPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TokenRewardPayment.init({
    txid: DataTypes.STRING,
    txhex: DataTypes.TEXT,
    address: DataTypes.STRING,
    note: DataTypes.TEXT,
    payees: DataTypes.JSON,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TokenRewardPayment',
  });
  return TokenRewardPayment;
};