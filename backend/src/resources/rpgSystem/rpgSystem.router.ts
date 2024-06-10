import { Router } from "express";
import rpgSystemController from "./rpgSystem.controllers";
import { isAdmin } from "../../middlewares/auth/isAdmin";

const router = Router();

router.post("/", isAdmin, rpgSystemController.create);
router.put("/:id", isAdmin, rpgSystemController.update);
router.delete("/:id", isAdmin, rpgSystemController.remove);
router.get("/:id", rpgSystemController.get);
router.get("/", rpgSystemController.getAll);

export default router;
