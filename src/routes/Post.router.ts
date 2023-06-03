import {Router, Request, Response} from "express"
import { createPost, readAllPosts, readPost } from "../repositories/Post.repo"
import { IPost } from "../Interfaces";

export const PostRouter = Router();

PostRouter.post("/",async (req:Request, res:Response) => {
    try {
        const {text, userId} = req.body as IPost;
        const newPost = await createPost({
            text, userId
        })
        return res.send(newPost);
        
    } catch (error) {
        console.error(error)
    }
})

PostRouter.get("/:postId", async (req:Request, res:Response) =>{
    const params = req.params;
    const foundPost = await readPost(Number(params.postId));

    if(!foundPost){
        return res.sendStatus(404)
    }
    res.status(200);
    return res.send(foundPost.toJSON());
})

PostRouter.get("/", async (req:Request, res:Response) =>{
    const allPosts = await readAllPosts();

    if(!allPosts){
        return res.sendStatus(404)
    }
    res.status(200);
    return res.send(allPosts);
});