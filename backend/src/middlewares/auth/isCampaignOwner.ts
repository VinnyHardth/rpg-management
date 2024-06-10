import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const isCampaignOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { uid } = req.session;

  try {
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: id,
        masterId: uid,
      },
    });

    if (campaign) {
      next();
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(`${ReasonPhrases.UNAUTHORIZED}: Must be campaign owner.`);
    }
  } catch (error) {
    console.error("Error checking campaign ownership:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};
