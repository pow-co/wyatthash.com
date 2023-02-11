'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TokenRewardPayee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TokenRewardPayee.init({
    txid: DataTypes.STRING,
    paymail: DataTypes.STRING,
    address: DataTypes.STRING,
    script: DataTypes.STRING,
    satoshis: DataTypes.INTEGER,
    vout: DataTypes.INTEGER,
    tokens: DataTypes.DECIMAL,
    total_tokens: DataTypes.DECIMAL,
    total_satoshis: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TokenRewardPayee',
  });
  return TokenRewardPayee;
};