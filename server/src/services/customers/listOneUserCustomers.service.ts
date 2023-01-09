import { Customer } from "../../models/Customer";

export const listOneUserCustomersService = async (id: string) => {
  const customers = await Customer.find({ registeredBy: id }).exec();

  return customers;
};
