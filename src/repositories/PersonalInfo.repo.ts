import PersonalInfo from "../models/personalinfo";
import { PersonalInfoAttributes } from "../Interfaces";

// Create
export const createPersonalInfo = async (data: PersonalInfoAttributes): Promise<PersonalInfo | null> => {
  try {
    const response = await PersonalInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getPersonalInfoById = async (id: number): Promise<PersonalInfo | null> => {
  try {
    const response = await PersonalInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updatePersonalInfoById = async (id: number, data: PersonalInfoAttributes): Promise<PersonalInfo | null> => {
  try {
    const personalInfo = await PersonalInfo.findByPk(id);
    if (personalInfo) {
      await personalInfo.update(data);
      return personalInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deletePersonalInfoById = async (id: number): Promise<boolean> => {
  try {
    const personalInfo = await PersonalInfo.findByPk(id);
    if (personalInfo) {
      await personalInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
