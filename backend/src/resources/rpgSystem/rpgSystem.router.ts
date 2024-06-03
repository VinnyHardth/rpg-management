import { Router } from "express";
import rpgSystemController from "./rpgSystem.controllers";

const router = Router();

router.post("/", rpgSystemController.create);

export default router;
