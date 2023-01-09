import { Customer } from "../../models/Customer";
import { IUpdateCustomerRequest } from "../../interfaces/customers";
import { AppError } from "../../errors/appError";

export const updateCustomerService = async (
  customerId: string,
  userId: string,
  bodyData: IUpdateCustomerRequest
) => {
  if (bodyData.address) {
    const addressKeys = Object.keys(bodyData.address);

    if (
      !addressKeys.includes("streetOrAvenue") ||
      !addressKeys.includes("city") ||
      !addressKeys.includes("state") ||
      !addressKeys.includes("zipCode") ||
      !addressKeys.includes("country")
    ) {
      throw new AppError(
        "Full address required: streetOrAvenue, city, state, zipCode, country.",
        400
      );
    }
  }

  const updatedUser = Customer.findByIdAndUpdate(
    {
      _id: customerId,
      registeredBy: userId,
    },
    bodyData,
    { new: true }
  );

  return updatedUser;
};
