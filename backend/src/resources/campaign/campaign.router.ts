import { Router } from "express";
import campaignController from "./campaign.controller";
import { isCampaignOwner } from "../../middlewares/auth/isCampaignOwner";
import { isAuth } from "../../middlewares/auth/isAuth";

const router = Router();

router.post("/", isAuth, campaignController.create);
router.put("/:id", isAuth, isCampaignOwner, campaignController.update);
router.delete("/:id", isAuth, isCampaignOwner, campaignController.remove);
router.get("/:id", campaignController.get);
router.get("/", campaignController.getAll);

export default router;
