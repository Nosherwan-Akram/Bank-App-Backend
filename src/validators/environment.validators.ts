import { object, string, number } from "yup";

export const environmentValidator = object().shape({
  tokenKey: string().required(),
  port: number().required(),
  mongoHost: string().required(),
  mongoPort: string().required(),
  mongoDB: string().required(),
  mongoUser: string().required(),
});
