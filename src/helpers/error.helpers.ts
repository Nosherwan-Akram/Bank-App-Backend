import { BaseHttpError, UnAuthorizedError } from "~/errors";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { Error as MongooseErrors } from "mongoose";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export const baseHttpErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof BaseHttpError) {
    res.status(err.statusCode).json(err.message);
  } else next(err);
};

export const fallBackErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(500).json(err.message);
};

export const yupErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ValidationError) {
    res.status(400).json(err.message);
  } else next(err);
};

export const mongooseErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof MongooseErrors) {
    res.status(400).json(err.message);
  } else next(err);
};

export const authErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof UnAuthorizedError) {
    res.status(err.statusCode).json(err.message);
  } else if (err instanceof TokenExpiredError) {
    res.status(401).json("Your token has expired login to continue");
  } else if (err instanceof JsonWebTokenError) {
    res.status(401).json("Invalid session token login to continue");
  } else next(err);
};
