import express from "express";
import "dotenv/config";
import appMiddleware from "./middleware/index.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(appMiddleware);
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
