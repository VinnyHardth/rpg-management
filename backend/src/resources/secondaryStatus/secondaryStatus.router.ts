import { Router } from "express";
import secondaryStatusController from "./secondaryStatus.controller";

const router = Router();

router.post("/", secondaryStatusController.add);
router.put("/:id", secondaryStatusController.update);
router.delete("/:id", secondaryStatusController.remove);
router.get("/:id", secondaryStatusController.getById);
router.get("/", secondaryStatusController.getAll);

export default router;
