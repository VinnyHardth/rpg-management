import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import { CreateCampaignDto, UpdateCampaignDto } from "./campaign.types";
import {
  createCampaign,
  updateCampaign,
  removeCampaign,
  getAllCampaigns,
  getCampaign,
} from "./campaign.service";

export const create = async (req: Request, res: Response) => {
  const campaign = req.body as CreateCampaignDto;

  try {
    const createdCampaign = await createCampaign(campaign);

    return res.status(StatusCodes.CREATED).json(createdCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const campaign = req.body as UpdateCampaignDto;

  try {
    const updatedCampaign = await updateCampaign(id, campaign);

    return res.status(StatusCodes.OK).json(updatedCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const removedCampaign = await removeCampaign(id);

    return res.status(StatusCodes.OK).json(removedCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const campaign = await getCampaign(id);

    return res.status(StatusCodes.OK).json(campaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export const getAll = async (_: Request, res: Response) => {
  try {
    const campaigns = await getAllCampaigns();

    return res.status(StatusCodes.OK).json(campaigns);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export default { create, update, remove, get, getAll };
