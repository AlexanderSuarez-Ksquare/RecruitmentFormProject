import { Router, Request, Response } from "express";
import {
  createGovernmentInfo,
  getGovernmentInfoById,
  updateGovernmentInfoById,
  deleteGovernmentInfoById,
} from "../repositories/GovermentInfo.repo";
import { GovernmentInfoAttributes } from "../Interfaces";

export const GovernmentInfoRouter = Router();

GovernmentInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as GovernmentInfoAttributes;
    const newGovernmentInfo = await createGovernmentInfo(data);
    if (newGovernmentInfo) {
      return res.send(newGovernmentInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

GovernmentInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const governmentInfo = await getGovernmentInfoById(id);
    if (governmentInfo) {
      return res.send(governmentInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

GovernmentInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as GovernmentInfoAttributes;
    const updatedGovernmentInfo = await updateGovernmentInfoById(id, data);
    if (updatedGovernmentInfo) {
      return res.send(updatedGovernmentInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

GovernmentInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteGovernmentInfoById(id);
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
