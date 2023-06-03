import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

class Skill extends Model<InferAttributes<Skill>, InferCreationAttributes<Skill>> {
  declare id: CreationOptional<number>;
  declare preferred_programming_language: string;
  declare experience: string;
  declare disability: string;
}

export const setUpSkill = (sequelize: Sequelize) => {
  Skill.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      preferred_programming_language: DataTypes.STRING,
      experience: DataTypes.STRING,
      disability: DataTypes.STRING,
    },
    { sequelize, modelName: "Skill" }
  );
};

export default Skill;
