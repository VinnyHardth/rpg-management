import { Router } from "express";
import statusFromRpgSystemController from "./statusFromRpgSystem.controller";

const router = Router();

router.post("/", statusFromRpgSystemController.add);
router.put("/:id", statusFromRpgSystemController.update);
router.delete("/:id", statusFromRpgSystemController.remove);
router.get("/:id", statusFromRpgSystemController.getById);
router.get("/", statusFromRpgSystemController.getAll);

export default router;
