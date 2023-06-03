import AddressExtraInfo from "../models/addressextrainfo";
import { AddressExtraInfoAttributes } from "../Interfaces";

// Create
export const createAddressExtraInfo = async (data: AddressExtraInfoAttributes): Promise<AddressExtraInfo | null> => {
  try {
    const response = await AddressExtraInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getAddressExtraInfoById = async (id: number): Promise<AddressExtraInfo | null> => {
  try {
    const response = await AddressExtraInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateAddressExtraInfoById = async (id: number, data: AddressExtraInfoAttributes): Promise<AddressExtraInfo | null> => {
  try {
    const addressExtraInfo = await AddressExtraInfo.findByPk(id);
    if (addressExtraInfo) {
      await addressExtraInfo.update(data);
      return addressExtraInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteAddressExtraInfoById = async (id: number): Promise<boolean> => {
  try {
    const addressExtraInfo = await AddressExtraInfo.findByPk(id);
    if (addressExtraInfo) {
      await addressExtraInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};