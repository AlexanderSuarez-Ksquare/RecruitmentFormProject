import { Router, Request, Response } from "express";
import {
  createBankAccountInfo,
  getBankAccountInfoById,
  updateBankAccountInfoById,
  deleteBankAccountInfoById,
} from "../repositories/BankAccountInfo.repo";
import { BankAccountInfoAttributes } from "../Interfaces";

export const BankAccountInfoRouter = Router();

BankAccountInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as BankAccountInfoAttributes;
    const newBankAccountInfo = await createBankAccountInfo(data);
    if (newBankAccountInfo) {
      return res.send(newBankAccountInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

BankAccountInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const bankAccountInfo = await getBankAccountInfoById(id);
    if (bankAccountInfo) {
      return res.send(bankAccountInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

BankAccountInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as BankAccountInfoAttributes;
    const updatedBankAccountInfo = await updateBankAccountInfoById(id, data);
    if (updatedBankAccountInfo) {
      return res.send(updatedBankAccountInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

BankAccountInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteBankAccountInfoById(id);
    if (success) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});
