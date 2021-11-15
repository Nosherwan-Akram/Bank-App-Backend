import { Application } from "express";
import {
  authErrorHandler,
  baseHttpErrorHandler,
  yupErrorHandler,
  mongooseErrorHandler,
  fallBackErrorHandler,
} from "~/helpers";

export const loadErrorHandlers = (app: Application) => {
  app.use(authErrorHandler);
  app.use(baseHttpErrorHandler);
  app.use(yupErrorHandler);
  app.use(mongooseErrorHandler);
  app.use(fallBackErrorHandler);
};
