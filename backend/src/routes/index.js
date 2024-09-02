import { Router } from "express";
import personalRoute from "./personal.route.js";
const router = Router();

router.use("/api", personalRoute);

export default router;
