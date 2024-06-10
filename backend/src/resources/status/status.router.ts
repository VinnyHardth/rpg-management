import { Router } from "express";

import statusController from "./status.controller";
import { isAdmin } from "../../middlewares/auth/isAdmin";

const router = Router();

router.post("/", isAdmin, statusController.create);
router.put("/:id", isAdmin, statusController.update);
router.delete("/:id", isAdmin, statusController.remove);
router.get("/:id", statusController.getById);
router.get("/", statusController.getAll);

export default router;
