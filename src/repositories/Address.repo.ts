import Address from "../models/address";
import { AddressAttributes } from "../Interfaces";

// Create
export const createAddress = async (data: AddressAttributes): Promise<Address | null> => {
  try {
    const response = await Address.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getAddressById = async (id: number): Promise<Address | null> => {
  try {
    const response = await Address.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateAddressById = async (id: number, data: AddressAttributes): Promise<Address | null> => {
  try {
    const address = await Address.findByPk(id);
    if (address) {
      await address.update(data);
      return address;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteAddressById = async (id: number): Promise<boolean> => {
  try {
    const address = await Address.findByPk(id);
    if (address) {
      await address.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createAddress,
  getAddressById,
  updateAddressById,
  deleteAddressById,
};
