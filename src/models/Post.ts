import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize} from "sequelize";
import User from "./User";
import Comment from "./Comment";

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>>{
    declare id: CreationOptional<number>;
    declare text : string;
    declare userId : number;
}


export const setUpPost = (sequelize : Sequelize) =>{
    Post.init({
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
        }
    },{sequelize, modelName:"Post"});
}

export default Post;