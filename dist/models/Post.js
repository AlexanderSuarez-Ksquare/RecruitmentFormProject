"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpPost = void 0;
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("./User"));
class Post extends sequelize_1.Model {
}
const setUpPost = (sequelize) => {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: sequelize_1.DataTypes.STRING,
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: User_1.default,
                key: 'id'
            }
        }
    }, { sequelize, modelName: "Post" });
};
exports.setUpPost = setUpPost;
exports.default = Post;
