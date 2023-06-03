import { Router, Request, Response } from "express";
import {
  createFormalEducationInfo,
  getFormalEducationInfoById,
  updateFormalEducationInfoById,
  deleteFormalEducationInfoById,
} from "../repositories/FormalEducationInfo.repo";
import { FormalEducationInfoAttributes } from "../Interfaces";

export const FormalEducationInfoRouter = Router();

FormalEducationInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as FormalEducationInfoAttributes;
    const newFormalEducationInfo = await createFormalEducationInfo(data);
    if (newFormalEducationInfo) {
      return res.send(newFormalEducationInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

FormalEducationInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const formalEducationInfo = await getFormalEducationInfoById(id);
    if (formalEducationInfo) {
      return res.send(formalEducationInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

FormalEducationInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as FormalEducationInfoAttributes;
    const updatedFormalEducationInfo = await updateFormalEducationInfoById(id, data);
    if (updatedFormalEducationInfo) {
      return res.send(updatedFormalEducationInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

FormalEducationInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteFormalEducationInfoById(id);
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
