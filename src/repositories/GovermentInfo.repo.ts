import GovernmentInfo from "../models/governmentinfo";
import { GovernmentInfoAttributes } from "../Interfaces";

// Create
export const createGovernmentInfo = async (data: GovernmentInfoAttributes): Promise<GovernmentInfo | null> => {
  try {
    const response = await GovernmentInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getGovernmentInfoById = async (id: number): Promise<GovernmentInfo | null> => {
  try {
    const response = await GovernmentInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateGovernmentInfoById = async (id: number, data: GovernmentInfoAttributes): Promise<GovernmentInfo | null> => {
  try {
    const governmentInfo = await GovernmentInfo.findByPk(id);
    if (governmentInfo) {
      await governmentInfo.update(data);
      return governmentInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteGovernmentInfoById = async (id: number): Promise<boolean> => {
  try {
    const governmentInfo = await GovernmentInfo.findByPk(id);
    if (governmentInfo) {
      await governmentInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};