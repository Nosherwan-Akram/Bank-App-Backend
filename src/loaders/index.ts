import express, { Application } from "express";
import cors from "cors";
import { loadErrorHandlers } from "./error-handler.loader";
import "./mongo-db.loader";

export const loadApp = (app: Application) => {
  app.use(express.json());
  app.use(cors());

  loadErrorHandlers(app);

  app.get("/healthCheck", (req, res) => {
    res.send("bank app backend working");
  });

  app.use((_, res) => {
    res.status(404).json("This route does not exist");
  });
};
