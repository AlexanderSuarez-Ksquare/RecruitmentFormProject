import User from "../models/user";
import { UserAttributes } from "../Interfaces";

// Create
export const createUser = async (data: UserAttributes): Promise<User | null> => {
  try {
    const response = await User.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by username
export const getUserByUsername = async (username: string): Promise<User | null> => {
  try {
    const response = await User.findOne({ where: { username } });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by username
export const updateUserByUsername = async (username: string, data: UserAttributes): Promise<User | null> => {
  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      await user.update(data);
      return user;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by username
export const deleteUserByUsername = async (username: string): Promise<boolean> => {
  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};