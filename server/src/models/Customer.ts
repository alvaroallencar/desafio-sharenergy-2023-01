import { model, Schema } from "mongoose";

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: Object, required: true },
  cpf: { type: String, required: true, unique: true },
  registeredBy: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
});

export const Customer = model("Customer", CustomerSchema);
