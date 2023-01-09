import { Request, Response } from "express";
import { updateCustomerService } from "../../services/customers/updateCustomer.service";
import { IUpdateCustomerRequest } from "../../interfaces/customers";

export const updateCustomerController = async (req: Request, res: Response) => {
  const customerId: string = req.params.id;
  const userId: string = req.user.id;
  const bodyData: IUpdateCustomerRequest = req.body;

  const customerUpdated = await updateCustomerService(customerId, userId, bodyData);

  return res.json(customerUpdated);
};
