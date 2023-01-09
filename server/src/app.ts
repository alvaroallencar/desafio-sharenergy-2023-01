import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import express from "express";
import { usersRoute } from "./routes/users";
import { sessionsRoute } from "./routes/sessions";
import { customersRoute } from "./routes/customers";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);
app.use("/sessions", sessionsRoute);
app.use("/customers", customersRoute);
app.use(handleErrorMiddleware);

export { app };
