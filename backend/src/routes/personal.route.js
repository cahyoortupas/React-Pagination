import { Router } from "express";
import { getPersonaldata } from "../controllers/personal.controller.js";
const personalRoute = Router();

personalRoute.get("/personals", getPersonaldata);

export default personalRoute;
