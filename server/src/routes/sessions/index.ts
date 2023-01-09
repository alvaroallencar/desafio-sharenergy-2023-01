import { Router } from "express";
import { userLoginController } from "../../controllers/sessions/userLogin.controller";
import { sessionsSerializer } from "../../serializers/sessions";
import { validateSerializerMiddleware } from "../../middlewares/validateSerializer.middleware";

const sessionsRoute = Router();

sessionsRoute.post(
  "/login",
  validateSerializerMiddleware(sessionsSerializer),
  userLoginController
);

export { sessionsRoute };
