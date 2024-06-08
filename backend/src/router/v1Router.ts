import { Router } from "express";
import userRouter from "../resources/user/user.router";
import statusRouter from "../resources/status/status.router";
import campaignRouter from "../resources/campaign/campaign.router";
import rpgSystemRouter from "../resources/rpgSystem/rpgSystem.router";
import characterRouter from "../resources/character/character.router";
import userInCampaignRouter from "../resources/userInCampaign/userInCampaign.router";
import statusFromRpgSystemRouter from "../resources/statusFromRpgSystem/statusFromRpgSystem.router";

const router = Router();

router.use("/user", userRouter);
router.use("/userInCampaign", userInCampaignRouter);

router.use("/status", statusRouter);
router.use("/campaign", campaignRouter);
router.use("/rpgSystem", rpgSystemRouter);
router.use("/statusFromRpgSystem", statusFromRpgSystemRouter);

router.use("/character", characterRouter);

export default router;
