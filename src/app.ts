import { config } from "dotenv";
config();
import { register } from "tsconfig-paths";
import { compilerOptions } from "../tsconfig.json";
register({ baseUrl: __dirname, paths: compilerOptions.paths });

import express from "express";
import { environment } from "~/configs";
import { loadApp } from "./loaders";

const app = express();

loadApp(app);

app.listen(environment.port, () => {
  console.log(`server started on port ${environment.port}`);
});
