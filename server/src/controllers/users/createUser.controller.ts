import { Request, Response } from "express";
import { ICreateUserRequest } from "../../interfaces/users";
import { createUserService } from "../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const body: ICreateUserRequest = req.body;

  const createdUser = await createUserService(body);

  return res.status(201).json(createdUser);
};
