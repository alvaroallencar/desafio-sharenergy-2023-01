import { Request, Response } from "express";
import { ICreateCustomerRequest } from "../../interfaces/customers";
import { createCustomerService } from "../../services/customers/createCustomer.service";

export const createCustomerController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const body: ICreateCustomerRequest = req.body;

  const createdTrade = await createCustomerService(userId, body);

  return res.status(201).json(createdTrade);
};
