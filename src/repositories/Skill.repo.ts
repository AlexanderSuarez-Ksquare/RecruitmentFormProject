import Skill from "../models/skill";
import { SkillAttributes } from "../Interfaces";

// Create
export const createSkill = async (data: SkillAttributes): Promise<Skill | null> => {
  try {
    const response = await Skill.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getSkillById = async (id: number): Promise<Skill | null> => {
  try {
    const response = await Skill.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateSkillById = async (id: number, data: SkillAttributes): Promise<Skill | null> => {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      await skill.update(data);
      return skill;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteSkillById = async (id: number): Promise<boolean> => {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      await skill.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
