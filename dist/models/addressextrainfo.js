"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpAddressExtraInfo = void 0;
const sequelize_1 = require("sequelize");
class AddressExtraInfo extends sequelize_1.Model {
}
const setUpAddressExtraInfo = (sequelize) => {
    AddressExtraInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type_of_residency: sequelize_1.DataTypes.STRING,
        other_residency: sequelize_1.DataTypes.STRING,
        people: sequelize_1.DataTypes.STRING,
    }, { sequelize, modelName: "AddressExtraInfo" });
};
exports.setUpAddressExtraInfo = setUpAddressExtraInfo;
exports.default = AddressExtraInfo;
