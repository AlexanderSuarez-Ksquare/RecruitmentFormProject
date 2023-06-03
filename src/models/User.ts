import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize} from "sequelize";
import Post from "./Post";
import Comment from "./Comment";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: CreationOptional<number>;
    declare name : string;
    declare userName : string;
}


export const setUpUser = (sequelize : Sequelize) =>{
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : DataTypes.STRING,
        userName: DataTypes.STRING
    },{sequelize, modelName:"User"})
}

export default User;