import { Customer } from "../../models/Customer";
import { ICreateCustomerRequest, ICustomerResponse } from "../../interfaces/customers";
import { AppError } from "../../errors/appError";

export const createCustomerService = async (
  userId: string,
  data: ICreateCustomerRequest
): Promise<ICustomerResponse> => {
  const { name, email, phone, cpf, address } = data;

  const emailAlreadyRegistered = await Customer.findOne({ email }).exec();
  const cpfAlreadyRegistered = await Customer.findOne({ cpf }).exec();

  if (emailAlreadyRegistered || cpfAlreadyRegistered) {
    throw new AppError("Email and/or CPF already registered.", 400);
  }

  const createdCustomer = await Customer.create({
    name,
    email,
    phone,
    cpf,
    address,
    registeredBy: userId,
  });

  return createdCustomer as ICustomerResponse;
};
