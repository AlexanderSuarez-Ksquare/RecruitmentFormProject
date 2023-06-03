"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const User_1 = __importStar(require("../models/User"));
const Comment_1 = __importStar(require("../models/Comment"));
const Post_1 = __importStar(require("../models/Post"));
const startDB = (url) => {
    exports.sequelize = new sequelize_1.Sequelize(url);
    (0, User_1.setUpUser)(exports.sequelize);
    (0, Post_1.setUpPost)(exports.sequelize);
    (0, Comment_1.setUpComment)(exports.sequelize);
    User_1.default.hasMany(Post_1.default, {
        foreignKey: 'userId'
    });
    Post_1.default.belongsTo(User_1.default, {
        foreignKey: 'userId'
    });
    Post_1.default.hasMany(Comment_1.default, {
        foreignKey: 'postId'
    });
    Comment_1.default.belongsTo(Post_1.default, {
        foreignKey: 'postId'
    });
    User_1.default.hasMany(Comment_1.default, {
        foreignKey: 'userId'
    });
    Comment_1.default.belongsTo(User_1.default, {
        foreignKey: 'userId'
    });
    return exports.sequelize;
};
exports.startDB = startDB;
