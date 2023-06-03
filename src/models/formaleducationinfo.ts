import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class FormalEducationInfo extends Model<InferAttributes<FormalEducationInfo>, InferCreationAttributes<FormalEducationInfo>> {
  declare id: CreationOptional<number>;
  declare university_name: string;
  declare state: string;
  declare country: string;
  declare career_name: string;
  declare classes_completed: boolean;
  declare proof_classes_completed: string;
  declare degree_completed: boolean;
  declare proof_degree_completed: string;
  declare license_completed: boolean;
  declare proof_license_completed: string;
}

export const setUpFormalEducationInfo = (sequelize: Sequelize) => {
  FormalEducationInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      university_name: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      career_name: DataTypes.STRING,
      classes_completed: DataTypes.BOOLEAN,
      proof_classes_completed: DataTypes.STRING,
      degree_completed: DataTypes.BOOLEAN,
      proof_degree_completed: DataTypes.STRING,
      license_completed: DataTypes.BOOLEAN,
      proof_license_completed: DataTypes.STRING,
    },
    { sequelize, modelName: "FormalEducationInfo" }
  );
};

export default FormalEducationInfo;
