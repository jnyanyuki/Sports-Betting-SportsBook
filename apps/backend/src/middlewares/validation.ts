import { Request, Response, NextFunction } from "express";

export const RetrunValidation = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err && err.error && err.error.isJoi) {
    return res.status(400).json({ status: false, message: err.error.toString() });
  }
  return next(err);
};
