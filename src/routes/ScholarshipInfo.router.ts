import { Router, Request, Response } from "express";
import {
  createScholarshipInfo,
  getScholarshipInfoById,
  updateScholarshipInfoById,
  deleteScholarshipInfoById,
} from "../repositories/ScholarshipInfo.repo";
import { ScholarshipInfoAttributes } from "../Interfaces";

export const ScholarshipInfoRouter = Router();

ScholarshipInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as ScholarshipInfoAttributes;
    const newScholarshipInfo = await createScholarshipInfo(data);
    if (newScholarshipInfo) {
      return res.send(newScholarshipInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

ScholarshipInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const scholarshipInfo = await getScholarshipInfoById(id);
    if (scholarshipInfo) {
      return res.send(scholarshipInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

ScholarshipInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as ScholarshipInfoAttributes;
    const updatedScholarshipInfo = await updateScholarshipInfoById(id, data);
    if (updatedScholarshipInfo) {
      return res.send(updatedScholarshipInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

ScholarshipInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteScholarshipInfoById(id);
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
