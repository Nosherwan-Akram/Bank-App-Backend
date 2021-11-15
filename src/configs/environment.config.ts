import { environmentValidator } from "~/validators";

export const environment = environmentValidator.validateSync({
  tokenKey: process.env.TOKEN_KEY,
  port: process.env.PORT,
  mongoHost: process.env.MONGO_HOST,
  mongoPort: process.env.MONGO_PORT,
  mongoDB: process.env.MONGO_DB,
  mongoUser: process.env.MONGO_USER,
});
