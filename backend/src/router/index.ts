import axios from "axios";
import { Router } from "express";
import v1Router from "./v1Router";

const router = Router();

router.use("/v1", v1Router);

axios.defaults.baseURL = "http://localhost:3000/v1";

export default router;
