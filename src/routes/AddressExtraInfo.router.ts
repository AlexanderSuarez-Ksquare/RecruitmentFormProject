import { Router, Request, Response } from "express";
import {
  createAddressExtraInfo,
  getAddressExtraInfoById,
  updateAddressExtraInfoById,
  deleteAddressExtraInfoById,
} from "../repositories/AddressExtraInfo.repo";
import { AddressExtraInfoAttributes } from "../Interfaces";

export const AddressExtraInfoRouter = Router();

AddressExtraInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as AddressExtraInfoAttributes;
    const newAddressExtraInfo = await createAddressExtraInfo(data);
    if (newAddressExtraInfo) {
      return res.send(newAddressExtraInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AddressExtraInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const addressExtraInfo = await getAddressExtraInfoById(id);
    if (addressExtraInfo) {
      return res.send(addressExtraInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AddressExtraInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as AddressExtraInfoAttributes;
    const updatedAddressExtraInfo = await updateAddressExtraInfoById(id, data);
    if (updatedAddressExtraInfo) {
      return res.send(updatedAddressExtraInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AddressExtraInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteAddressExtraInfoById(id);
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
