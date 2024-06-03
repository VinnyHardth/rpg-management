import { Router } from "express";
import rpgSystemRouter from "../resources/rpgSystem/rpgSystem.router";

const router = Router();

router.use("/rpgSystem", rpgSystemRouter);

export default router;
