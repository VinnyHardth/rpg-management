import { Router } from "express";
import statusController from "./status.controller";

const router = Router();

router.post("/", statusController.create);
router.put("/:id", statusController.update);
router.delete("/:id", statusController.remove);
router.get("/:id", statusController.getById);
router.get("/", statusController.getAll);

export default router;
