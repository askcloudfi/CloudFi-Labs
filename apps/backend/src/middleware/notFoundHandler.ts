import { Request, Response, NextFunction } from 'express';
import { createAppError } from './errorHandler';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = createAppError(`Can't find ${req.originalUrl} on this server!`, 404);
  next(error);
};