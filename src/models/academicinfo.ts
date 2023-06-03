import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class AcademicInfo extends Model<InferAttributes<AcademicInfo>, InferCreationAttributes<AcademicInfo>> {
  declare id: CreationOptional<number>;
  declare software_devel_comments: string;
  declare degree_level: string;
  declare informal_education: string;
  declare other_education: string;
}

export const setUpAcademicInfo = (sequelize: Sequelize) => {
  AcademicInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      software_devel_comments: DataTypes.STRING,
      degree_level: DataTypes.STRING,
      informal_education: DataTypes.STRING,
      other_education: DataTypes.STRING,
    },
    { sequelize, modelName: "AcademicInfo" }
  );
};

export default AcademicInfo;

