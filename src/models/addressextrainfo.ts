import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class AddressExtraInfo extends Model<InferAttributes<AddressExtraInfo>, InferCreationAttributes<AddressExtraInfo>> {
  declare id: CreationOptional<number>;
  declare type_of_residency: string;
  declare other_residency: string;
  declare people: string;
}

export const setUpAddressExtraInfo = (sequelize: Sequelize) => {
  AddressExtraInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type_of_residency: DataTypes.STRING,
      other_residency: DataTypes.STRING,
      people: DataTypes.STRING,
    },
    { sequelize, modelName: "AddressExtraInfo" }
  );
};

export default AddressExtraInfo;

