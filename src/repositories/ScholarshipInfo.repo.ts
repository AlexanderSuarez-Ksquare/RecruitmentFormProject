import ScholarshipInfo from "../models/scholarshipinfo";
import { ScholarshipInfoAttributes } from "../Interfaces";

// Create
export const createScholarshipInfo = async (data: ScholarshipInfoAttributes): Promise<ScholarshipInfo | null> => {
  try {
    const response = await ScholarshipInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getScholarshipInfoById = async (id: number): Promise<ScholarshipInfo | null> => {
  try {
    const response = await ScholarshipInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateScholarshipInfoById = async (id: number, data: ScholarshipInfoAttributes): Promise<ScholarshipInfo | null> => {
  try {
    const scholarshipInfo = await ScholarshipInfo.findByPk(id);
    if (scholarshipInfo) {
      await scholarshipInfo.update(data);
      return scholarshipInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteScholarshipInfoById = async (id: number): Promise<boolean> => {
  try {
    const scholarshipInfo = await ScholarshipInfo.findByPk(id);
    if (scholarshipInfo) {
      await scholarshipInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
