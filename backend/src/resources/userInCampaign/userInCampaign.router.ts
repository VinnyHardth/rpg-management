import { Router } from "express";
import userInCampaignController from "./userInCampaign.controller";

const router = Router();

router.post("/", userInCampaignController.add);
router.put("/:id", userInCampaignController.update);
router.delete("/:id", userInCampaignController.remove);
router.get("/:id", userInCampaignController.getById);
router.get("/", userInCampaignController.getAll);

export default router;
