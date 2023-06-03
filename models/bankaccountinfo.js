'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankAccountInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BankAccountInfo.init({
    acc_number: DataTypes.BIGINT,
    clabe: DataTypes.BIGINT,
    bank: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BankAccountInfo',
  });
  return BankAccountInfo;
};