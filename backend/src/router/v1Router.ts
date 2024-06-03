import { Router } from "express";
import rpgSystemRouter from "../resources/rpgSystem/rpgSystem.router";
import userRouter from "../resources/user/user.router";

const router = Router();

router.use("/rpgSystem", rpgSystemRouter);
router.use("/user", userRouter);

export default router;
