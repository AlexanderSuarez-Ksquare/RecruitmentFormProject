"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpGovernmentInfo = void 0;
const sequelize_1 = require("sequelize");
class GovernmentInfo extends sequelize_1.Model {
}
const setUpGovernmentInfo = (sequelize) => {
    GovernmentInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        curp: sequelize_1.DataTypes.STRING,
        identification_number: sequelize_1.DataTypes.STRING,
    }, { sequelize, modelName: "GovernmentInfo" });
};
exports.setUpGovernmentInfo = setUpGovernmentInfo;
exports.default = GovernmentInfo;
