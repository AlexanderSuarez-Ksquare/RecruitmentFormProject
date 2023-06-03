import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class BankAccountInfo extends Model<InferAttributes<BankAccountInfo>, InferCreationAttributes<BankAccountInfo>> {
  declare id: CreationOptional<number>;
  declare acc_number: bigint;
  declare clabe: bigint;
  declare bank: string;
}

export const setUpBankAccountInfo = (sequelize: Sequelize) => {
  BankAccountInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      acc_number: DataTypes.BIGINT,
      clabe: DataTypes.BIGINT,
      bank: DataTypes.STRING,
    },
    { sequelize, modelName: "BankAccountInfo" }
  );
};

export default BankAccountInfo;

