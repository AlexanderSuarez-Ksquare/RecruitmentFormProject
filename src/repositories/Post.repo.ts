import Post from "../models/Post"
import { IPost } from "../Interfaces"

export const createPost = async ({text,userId}:IPost) : Promise<Post | null> => {
    try {
        const response = await Post.create({
            text,
            userId
        })
        return response
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const readPost =async (id :number) : Promise<Post | null> => {
    try {
        const response = await Post.findByPk(id)
        return response;
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const readAllPosts = async (): Promise<Post[] | null> => {
    try {
        const response = await Post.findAll();
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};