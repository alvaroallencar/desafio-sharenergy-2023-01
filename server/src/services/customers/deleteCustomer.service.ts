import { Customer } from "../../models/Customer";
import { AppError } from "../../errors/appError";
import { MongooseError } from "mongoose";

export const deleteCustomerService = async (
  customerId: string,
  userId: string
): Promise<boolean | void> => {
  Customer.findByIdAndDelete(
    { _id: customerId, registeredBy: userId },
    (error: MongooseError) => {
      if (!error) {
        return true;
      } else {
        throw new AppError("Customer not found", 400);
      }
    }
  );
};
