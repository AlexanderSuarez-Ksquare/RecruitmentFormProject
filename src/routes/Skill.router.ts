import { Router, Request, Response } from "express";
import {
  createSkill,
  getSkillById,
  updateSkillById,
  deleteSkillById,
} from "../repositories/Skill.repo";
import { SkillAttributes } from "../Interfaces";

export const SkillRouter = Router();

SkillRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as SkillAttributes;
    const newSkill = await createSkill(data);
    if (newSkill) {
      return res.send(newSkill);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

SkillRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const skill = await getSkillById(id);
    if (skill) {
      return res.send(skill);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

SkillRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as SkillAttributes;
    const updatedSkill = await updateSkillById(id, data);
    if (updatedSkill) {
      return res.send(updatedSkill);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

SkillRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteSkillById(id);
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
