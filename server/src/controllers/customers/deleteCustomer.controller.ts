import { Request, Response } from "express";
import { deleteCustomerService } from "../../services/customers/deleteCustomer.service";

export const deleteCustomerController = async (req: Request, res: Response) => {
  const customerId: string = req.params.id;
  const userId: string = req.user.id;

  await deleteCustomerService(customerId, userId);

  return res.status(204).send();
};
