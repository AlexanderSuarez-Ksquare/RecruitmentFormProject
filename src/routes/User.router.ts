import { Router, Request, Response } from "express";
import { createUser, getUserByUsername, updateUserByUsername, deleteUserByUsername } from "../repositories/User.repo";
import { UserAttributes } from "../Interfaces";

export const UserRouter = Router();

// Create User
UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { username, firstname, lastname, email, phone } = req.body as UserAttributes;
    const newUser = await createUser({ username, firstname, lastname, email, phone });
    if (!newUser) {
      return res.sendStatus(500);
    }
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

// Get User by Username
UserRouter.get("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  const foundUser = await getUserByUsername(username);
  if (!foundUser) {
    return res.sendStatus(404);
  }
  return res.json(foundUser);
});

// Update User by Username
UserRouter.put("/:username", async (req: Request, res: Response) => {
    const username = req.params.username;
    const { username: newUsername, firstname, lastname, email, phone } = req.body as UserAttributes;
    const updatedUser = await updateUserByUsername(username, { username: newUsername, firstname, lastname, email, phone });
    if (!updatedUser) {
      return res.sendStatus(404);
    }
    return res.json(updatedUser);
  });

// Delete User by Username
UserRouter.delete("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  const success = await deleteUserByUsername(username);
  if (!success) {
    return res.sendStatus(404);
  }
  return res.sendStatus(204);
});

export default UserRouter;
