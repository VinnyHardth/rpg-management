import { Router } from "express";

import authRouter from "../resources/auth/auth.router";
import userRouter from "../resources/user/user.router";
import statusRouter from "../resources/status/status.router";
import campaignRouter from "../resources/campaign/campaign.router";
import rpgSystemRouter from "../resources/rpgSystem/rpgSystem.router";
import characterRouter from "../resources/character/character.router";
import primaryStatusRouter from "../resources/primaryStatus/primaryStatus.router";
import secondaryStatusRouter from "../resources/secondaryStatus/secondaryStatus.router";
import userInCampaignRouter from "../resources/userInCampaign/userInCampaign.router";
import statusFromRpgSystemRouter from "../resources/statusFromRpgSystem/statusFromRpgSystem.router";

const router = Router();

router.use("/auth", authRouter);

router.use("/user", userRouter);
router.use("/userInCampaign", userInCampaignRouter);

router.use("/status", statusRouter);
router.use("/campaign", campaignRouter);
router.use("/rpgSystem", rpgSystemRouter);
router.use("/statusFromRpgSystem", statusFromRpgSystemRouter);

router.use("/character", characterRouter);
router.use("/primaryStatus", primaryStatusRouter);
router.use("/secondaryStatus", secondaryStatusRouter);

export default router;
