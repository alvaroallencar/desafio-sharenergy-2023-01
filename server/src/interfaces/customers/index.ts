import { Document } from "mongoose";

export interface ICustomerAddress {
  streetOrAvenue: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ICreateCustomerRequest {
  name: string;
  email: string;
  phone: string;
  address: ICustomerAddress;
  cpf: string;
  registeredBy: string;
}

export interface ICustomerResponse extends Document {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: ICustomerAddress;
  cpf: string;
  registeredBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateCustomerRequest {
  name?: string;
  email?: string;
  phone?: string;
  address?: ICustomerAddress;
  cpf?: string;
}
