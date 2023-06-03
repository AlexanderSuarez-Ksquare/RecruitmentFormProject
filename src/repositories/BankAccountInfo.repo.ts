import BankAccountInfo from "../models/bankaccountinfo";
import { BankAccountInfoAttributes } from "../Interfaces";

// Create
export const createBankAccountInfo = async (data: BankAccountInfoAttributes): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getBankAccountInfoById = async (id: number): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateBankAccountInfoById = async (id: number, data: BankAccountInfoAttributes): Promise<BankAccountInfo | null> => {
  try {
    const bankAccountInfo = await BankAccountInfo.findByPk(id);
    if (bankAccountInfo) {
      await bankAccountInfo.update(data);
      return bankAccountInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteBankAccountInfoById = async (id: number): Promise<boolean> => {
  try {
    const bankAccountInfo = await BankAccountInfo.findByPk(id);
    if (bankAccountInfo) {
      await bankAccountInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};