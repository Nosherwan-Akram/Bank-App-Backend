import { environment } from "configs/environment.config";
import { UnAuthorizedError } from "errors/auth.errors";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SessionTokenPayload } from "types/session.types";
export const sessionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken)
      throw new UnAuthorizedError({
        message: "You are not authorized to perform this action",
        controller: "auth.middleware>sessionMiddleware",
      });
    const [, token] = bearerToken.split(" ");
    const payload = jwt.verify(
      token,
      environment.tokenKey
    ) as SessionTokenPayload;
    res.locals.user = payload;
    next();
  } catch (err) {
    next(err);
  }
};
