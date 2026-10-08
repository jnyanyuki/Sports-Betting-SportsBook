import { Request, Response, NextFunction } from "express";

export const checkUrl = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export const corsOptionsDelegate = (req: any, callback: any) => {
  callback(null, { origin: true });
};
