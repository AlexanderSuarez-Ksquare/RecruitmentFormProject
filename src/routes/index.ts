import { Router } from "express";
import { UserRouter } from "./User.router";
import { PostRouter } from "./Post.router";
import { CommentRouter } from "./Comment.router";

const APIRouter = Router();

APIRouter.use("/user", UserRouter);
APIRouter.use("/post", PostRouter);
APIRouter.use("/post", CommentRouter);

export default APIRouter;