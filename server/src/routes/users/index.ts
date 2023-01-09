import { Router } from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { createUserSerializer } from "../../serializers/users";
import { validateSerializerMiddleware } from "../../middlewares/validateSerializer.middleware";

const usersRoute = Router();

usersRoute.post(
  "/",
  validateSerializerMiddleware(createUserSerializer),
  createUserController
);

export { usersRoute };
