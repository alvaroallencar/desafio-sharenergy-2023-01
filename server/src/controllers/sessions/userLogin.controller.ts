import { Request, Response } from "express";
import { userLoginService } from "../../services/sessions/userLogin.service";

export const userLoginController = async (req: Request, res: Response) => {
  const loginData = req.body;

  const response = await userLoginService(loginData);

  return res.json(response);
};
