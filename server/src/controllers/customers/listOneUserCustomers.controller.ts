import { Request, Response } from "express";
import { listOneUserCustomersService } from "../../services/customers/listOneUserCustomers.service";

export const listAllCustomersController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;

  const customers = await listOneUserCustomersService(userId);

  return res.json(customers);
};
