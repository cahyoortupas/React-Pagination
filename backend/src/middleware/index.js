import express from "express";
const appMiddleware = express();
import cors from "cors";
import router from "../routes/index.js";

appMiddleware.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
appMiddleware.options("*", cors());
appMiddleware.use(express.json());
appMiddleware.use(router);

export default appMiddleware;
