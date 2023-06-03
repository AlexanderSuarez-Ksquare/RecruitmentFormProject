import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize} from "sequelize";
import User from "./User";
import Post from "./Post";

class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>>{
    declare id: CreationOptional<number>;
    declare text : string;
    declare postId : number;
    declare userId : number;
}


export const setUpComment = (sequelize : Sequelize) =>{
    Comment.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text : DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User, 
                key: 'id'
            }
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: User, 
                key: 'id'
            }
        }
    },{sequelize, modelName:"Comment"});
}

export default Comment;