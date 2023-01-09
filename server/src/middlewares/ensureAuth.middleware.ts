import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Missing token", 401);
  }

  jwt.verify(token, String(process.env.SECRET_KEY), (err: unknown, decoded: any) => {
    if (err) {
      throw new AppError("Invalid token", 401);
    }

    req.user = {
      id: decoded.id,
    };

    return next();
  });
};
