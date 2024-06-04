import { Router } from "express";
import rpgSystemRouter from "../resources/rpgSystem/rpgSystem.router";
import userRouter from "../resources/user/user.router";
import statusRouter from "../resources/status/status.router";
import statusFromRpgSystemRouter from "../resources/statusFromRpgSystem/statusFromRpgSystem.router";

const router = Router();

router.use("/rpgSystem", rpgSystemRouter);
router.use("/status", statusRouter);
router.use("/statusFromRpgSystem", statusFromRpgSystemRouter);
router.use("/user", userRouter);

export default router;
