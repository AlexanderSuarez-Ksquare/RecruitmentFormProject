"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpComment = void 0;
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("./User"));
class Comment extends sequelize_1.Model {
}
const setUpComment = (sequelize) => {
    Comment.init({
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
        },
        postId: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: User_1.default,
                key: 'id'
            }
        }
    }, { sequelize, modelName: "Comment" });
};
exports.setUpComment = setUpComment;
exports.default = Comment;
