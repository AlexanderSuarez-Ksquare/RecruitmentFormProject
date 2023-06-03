import { Router, Request, Response } from "express";
import {
  createPersonalInfo,
  getPersonalInfoById,
  updatePersonalInfoById,
  deletePersonalInfoById,
} from "../repositories/PersonalInfo.repo";
import { PersonalInfoAttributes } from "../Interfaces";

export const PersonalInfoRouter = Router();

PersonalInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as PersonalInfoAttributes;
    const newPersonalInfo = await createPersonalInfo(data);
    if (newPersonalInfo) {
      return res.send(newPersonalInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

PersonalInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const personalInfo = await getPersonalInfoById(id);
    if (personalInfo) {
      return res.send(personalInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

PersonalInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as PersonalInfoAttributes;
    const updatedPersonalInfo = await updatePersonalInfoById(id, data);
    if (updatedPersonalInfo) {
      return res.send(updatedPersonalInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

PersonalInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deletePersonalInfoById(id);
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
