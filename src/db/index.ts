import { Sequelize } from "sequelize";
import User, {setUpUser} from "../models/User"
import Comment, { setUpComment} from "../models/Comment";
import Post, { setUpPost } from "../models/Post";

export let sequelize : Sequelize;

export const startDB = (url : string): Sequelize=>{
    sequelize = new Sequelize(url);
    setUpUser(sequelize);
    setUpPost(sequelize);
    setUpComment(sequelize);
    User.hasMany(Post, {
        foreignKey: 'userId'
    });

    Post.belongsTo(User, {
        foreignKey: 'userId'
    });

    Post.hasMany(Comment, {
        foreignKey: 'postId'
    });

    Comment.belongsTo(Post, {
        foreignKey: 'postId'
    });

    User.hasMany(Comment, {
        foreignKey: 'userId'
    });

    Comment.belongsTo(User, {
        foreignKey: 'userId'
    });
    return sequelize;
}
