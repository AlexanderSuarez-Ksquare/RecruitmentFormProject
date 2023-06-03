import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class ScholarshipInfo extends Model<InferAttributes<ScholarshipInfo>, InferCreationAttributes<ScholarshipInfo>> {
  declare id: CreationOptional<number>;
  declare level: string;
  declare kind: string;
  declare period: number;
}

export const setUpScholarshipInfo = (sequelize: Sequelize) => {
  ScholarshipInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      level: DataTypes.STRING,
      kind: DataTypes.STRING,
      period: DataTypes.INTEGER,
    },
    { sequelize, modelName: "ScholarshipInfo" }
  );
};

export default ScholarshipInfo;