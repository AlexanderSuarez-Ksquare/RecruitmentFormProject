import { Router, Request, Response } from "express";
import {
  createAcademicInfo,
  getAcademicInfoById,
  updateAcademicInfoById,
  deleteAcademicInfoById,
} from "../repositories/AcademicInfo.repo";
import { AcademicInfoAttributes } from "../Interfaces";

export const AcademicInfoRouter = Router();

AcademicInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as AcademicInfoAttributes;
    const newAcademicInfo = await createAcademicInfo(data);
    if (newAcademicInfo) {
      return res.send(newAcademicInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AcademicInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const academicInfo = await getAcademicInfoById(id);
    if (academicInfo) {
      return res.send(academicInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AcademicInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as AcademicInfoAttributes;
    const updatedAcademicInfo = await updateAcademicInfoById(id, data);
    if (updatedAcademicInfo) {
      return res.send(updatedAcademicInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AcademicInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteAcademicInfoById(id);
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
