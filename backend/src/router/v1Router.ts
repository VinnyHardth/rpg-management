import { Router } from "express";
import campaignRouter from "../resources/rpgSystem/rpgSystem.router";

const router = Router();

router.use("/rpgSystem", campaignRouter);

export default router;
