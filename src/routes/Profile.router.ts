import { Router, Request, Response } from "express";
import {
  createProfile,
  getProfileById,
  updateProfileById,
  deleteProfileById,
} from "../repositories/Profile.repo";
import { ProfileAttributes } from "../Interfaces";

export const ProfileRouter = Router();

ProfileRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as ProfileAttributes;
    const newProfile = await createProfile(data);
    if (newProfile) {
      return res.send(newProfile);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

ProfileRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const profile = await getProfileById(id);
    if (profile) {
      return res.send(profile);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

ProfileRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as ProfileAttributes;
    const updatedProfile = await updateProfileById(id, data);
    if (updatedProfile) {
      return res.send(updatedProfile);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

ProfileRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteProfileById(id);
    if (success) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});
