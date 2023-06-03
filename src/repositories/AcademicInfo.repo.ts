import AcademicInfo from "../models/academicinfo";
import { AcademicInfoAttributes } from "../Interfaces";

// Create
export const createAcademicInfo = async (data: AcademicInfoAttributes): Promise<AcademicInfo | null> => {
  try {
    const response = await AcademicInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getAcademicInfoById = async (id: number): Promise<AcademicInfo | null> => {
  try {
    const response = await AcademicInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateAcademicInfoById = async (id: number, data: AcademicInfoAttributes): Promise<AcademicInfo | null> => {
  try {
    const academicInfo = await AcademicInfo.findByPk(id);
    if (academicInfo) {
      await academicInfo.update(data);
      return academicInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteAcademicInfoById = async (id: number): Promise<boolean> => {
  try {
    const academicInfo = await AcademicInfo.findByPk(id);
    if (academicInfo) {
      await academicInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
