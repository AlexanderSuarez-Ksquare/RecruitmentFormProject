"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpSkill = void 0;
const sequelize_1 = require("sequelize");
class Skill extends sequelize_1.Model {
}
const setUpSkill = (sequelize) => {
    Skill.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        preferred_programming_language: sequelize_1.DataTypes.STRING,
        experience: sequelize_1.DataTypes.STRING,
        disability: sequelize_1.DataTypes.STRING,
    }, { sequelize, modelName: "Skill" });
};
exports.setUpSkill = setUpSkill;
exports.default = Skill;
