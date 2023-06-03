import Comment from "../models/Comment"
import { IComment } from "../Interfaces"

export const createComment = async ({text, userId, postId}:IComment) : Promise<Comment | null> => {
    try {
        const response = await Comment.create({
            text,
            userId,
            postId
        })
        return response
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const readCommentsByPost = async (postId :number): Promise<Comment[] | null> => {
    try {
        const response = await Comment.findAll({
            where: {
                postId: postId
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};
