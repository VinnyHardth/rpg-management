import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import express from "express";
import dotenv from "dotenv";

import validateEnv from "./utils/validateEnv";
import router from "./router";

declare module "express-session" {
  interface SessionData {
    uid: string;
    userTypeId: string;
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.use(
  session({
    genid: (req) => uuidv4(),
    secret: "StMf#She#mj34se#dSm",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
