import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import { createCampaign } from "./campaign.service";
import { CreateCampaignDto } from "./campaign.types";

export async function create(req: Request, res: Response) {
  const campaign = req.body as CreateCampaignDto;

  try {
    const createdCampaign = await createCampaign(campaign);
    return res.status(StatusCodes.CREATED).json(createdCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }

  return res.status(201).json(campaign);
}
