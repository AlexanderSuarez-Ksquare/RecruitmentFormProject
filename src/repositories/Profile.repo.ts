import Profile from "../models/profile";
import { ProfileAttributes } from "../Interfaces";

// Create
export const createProfile = async (data: ProfileAttributes): Promise<Profile | null> => {
  try {
    const response = await Profile.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getProfileById = async (id: number): Promise<Profile | null> => {
  try {
    const response = await Profile.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateProfileById = async (id: number, data: ProfileAttributes): Promise<Profile | null> => {
  try {
    const profile = await Profile.findByPk(id);
    if (profile) {
      await profile.update(data);
      return profile;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteProfileById = async (id: number): Promise<boolean> => {
  try {
    const profile = await Profile.findByPk(id);
    if (profile) {
      await profile.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};