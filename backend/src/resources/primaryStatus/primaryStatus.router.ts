import { Router } from "express";
import primaryStatusController from "./primaryStatus.controller";

const router = Router();

router.post("/", primaryStatusController.add);
router.put("/:id", primaryStatusController.update);
router.delete("/:id", primaryStatusController.remove);
router.get("/:id", primaryStatusController.getById);
router.get("/", primaryStatusController.getAll);

export default router;
