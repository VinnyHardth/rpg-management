import dotenv from "dotenv";
import express from "express";

import validateEnv from "./utils/validateEnv";
import router from "./router";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
