"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpUser = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const setUpUser = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: sequelize_1.DataTypes.STRING,
        userName: sequelize_1.DataTypes.STRING
    }, { sequelize, modelName: "User" });
};
exports.setUpUser = setUpUser;
exports.default = User;
