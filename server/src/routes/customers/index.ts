import { Router } from "express";
import {
  createCustomerSerializer,
  updateCustomerSerializer,
} from "../../serializers/customers";
import { createCustomerController } from "../../controllers/customers/createCustomer.controller";
import { validateSerializerMiddleware } from "../../middlewares/validateSerializer.middleware";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { listAllCustomersController } from "../../controllers/customers/listOneUserCustomers.controller";
import { listOneCustomerController } from "../../controllers/customers/listOneCustomer.controller";
import { deleteCustomerController } from "../../controllers/customers/deleteCustomer.controller";
import { updateCustomerController } from "../../controllers/customers/updateCustomer.controller";

const customersRoute = Router();

customersRoute.post(
  "/",
  ensureAuthMiddleware,
  validateSerializerMiddleware(createCustomerSerializer),
  createCustomerController
);
customersRoute.get("/", ensureAuthMiddleware, listAllCustomersController);
customersRoute.get("/:id", ensureAuthMiddleware, listOneCustomerController);
customersRoute.patch(
  "/:id",
  ensureAuthMiddleware,
  validateSerializerMiddleware(updateCustomerSerializer),
  updateCustomerController
);
customersRoute.delete("/:id", ensureAuthMiddleware, deleteCustomerController);

export { customersRoute };
