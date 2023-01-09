import { Customer } from "../../models/Customer";
import { AppError } from "../../errors/appError";

export const listOneCustomerService = async (customerId: string, userId: string) => {
  const customer = await Customer.findOne({
    _id: customerId,
    registeredBy: userId,
  }).exec();

  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  return customer;
};
