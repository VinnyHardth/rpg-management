import { Router } from "express";
import rpgSystemController from "./rpgSystem.controllers";

const router = Router();

router.post("/", rpgSystemController.create);
router.put("/:id", rpgSystemController.update);
router.delete("/:id", rpgSystemController.remove);
router.get("/:id", rpgSystemController.get);
router.get("/", rpgSystemController.getAll);

export default router;
