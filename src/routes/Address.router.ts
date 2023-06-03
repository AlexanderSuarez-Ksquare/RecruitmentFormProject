import { Router, Request, Response } from "express";
import {
  createAddress,
  getAddressById,
  updateAddressById,
  deleteAddressById,
} from "../repositories/Address.repo";
import { AddressAttributes } from "../Interfaces";

export const AddressRouter = Router();

AddressRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as AddressAttributes;
    const newAddress = await createAddress(data);
    if (newAddress) {
      return res.send(newAddress);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AddressRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const address = await getAddressById(id);
    if (address) {
      return res.send(address);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AddressRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as AddressAttributes;
    const updatedAddress = await updateAddressById(id, data);
    if (updatedAddress) {
      return res.send(updatedAddress);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

AddressRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteAddressById(id);
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
