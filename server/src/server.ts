import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app";

mongoose.set("strictQuery", false);

export const dbDevConnect = async () => {
  return await mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => {
      console.log("Connected to MongoDB!");

      const PORT = process.env.PORT || 3333;

      app.listen(PORT);

      console.log(`Running at http://localhost:${PORT}`);

      return true;
    })
    .catch((err) => {
      console.error("Error during MongoDB connection ", err);
    });
};

(async () => {
  await dbDevConnect();
})();
