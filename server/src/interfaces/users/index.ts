import { Document } from "mongoose";

export interface ICreateUserRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ICreateUserResponse extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  rememberMe?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
