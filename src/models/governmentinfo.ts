import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class GovernmentInfo extends Model<InferAttributes<GovernmentInfo>, InferCreationAttributes<GovernmentInfo>> {
  declare id: CreationOptional<number>;
  declare curp: string;
  declare identification_number: string;
}

export const setUpGovernmentInfo = (sequelize: Sequelize) => {
  GovernmentInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      curp: DataTypes.STRING,
      identification_number: DataTypes.STRING,
    },
    { sequelize, modelName: "GovernmentInfo" }
  );
};

export default GovernmentInfo;

