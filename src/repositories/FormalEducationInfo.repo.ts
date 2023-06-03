import FormalEducationInfo from "../models/formaleducationinfo";
import { FormalEducationInfoAttributes } from "../Interfaces";

// Create
export const createFormalEducationInfo = async (data: FormalEducationInfoAttributes): Promise<FormalEducationInfo | null> => {
  try {
    const response = await FormalEducationInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getFormalEducationInfoById = async (id: number): Promise<FormalEducationInfo | null> => {
  try {
    const response = await FormalEducationInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateFormalEducationInfoById = async (id: number, data: FormalEducationInfoAttributes): Promise<FormalEducationInfo | null> => {
  try {
    const formalEducationInfo = await FormalEducationInfo.findByPk(id);
    if (formalEducationInfo) {
      await formalEducationInfo.update(data);
      return formalEducationInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteFormalEducationInfoById = async (id: number): Promise<boolean> => {
  try {
    const formalEducationInfo = await FormalEducationInfo.findByPk(id);
    if (formalEducationInfo) {
      await formalEducationInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};