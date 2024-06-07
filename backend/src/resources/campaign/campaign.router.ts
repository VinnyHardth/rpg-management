import { Router } from "express";
import campaignController from "./campaign.controller";

const router = Router();

router.post("/", campaignController.create);
router.put("/:id", campaignController.update);
router.delete("/:id", campaignController.remove);
router.get("/:id", campaignController.get);
router.get("/", campaignController.getAll);

export default router;
