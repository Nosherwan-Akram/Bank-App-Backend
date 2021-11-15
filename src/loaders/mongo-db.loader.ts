import mongoose from "mongoose";
import { environment } from "~/configs";

const { mongoDB, mongoHost, mongoPort } = environment;

mongoose
  .connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDB}`)
  .then(() => console.log("[DB Connected]"))
  .catch((error) => console.log(error.message));
