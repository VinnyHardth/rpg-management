import { Router } from "express";
import rpgSystemRouter from "../resources/rpgSystem/rpgSystem.router";
import userRouter from "../resources/user/user.router";
import statusRouter from "../resources/status/status.router";

const router = Router();

router.use("/rpgSystem", rpgSystemRouter);
router.use("/status", statusRouter);
router.use("/user", userRouter);

export default router;
