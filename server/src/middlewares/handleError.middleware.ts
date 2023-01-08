import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const handleErrorMiddleware = async (
  error: Error,
  req: Request,
  res: Response
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: "AppError",
      message: error.message,
    });
  }
  console.log(error);

  return res.status(500).json({
    error: "Error",
    message: "Internal server error",
  });
};

export default handleErrorMiddleware;
