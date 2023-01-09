import { Request, Response } from "express";
import { listOneCustomerService } from "../../services/customers/listOneCustomer.service";

export const listOneCustomerController = async (req: Request, res: Response) => {
  const customerId: string = req.params.id;
  const userId: string = req.user.id;

  const customer = await listOneCustomerService(customerId, userId);

  return res.json(customer);
};
