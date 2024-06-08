import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import {
  AddUserInCampaignDto,
  UpdateUserInCampaignDto,
} from "./userInCampaign.types";

import {
  addUserInCampaign,
  updateUserInCampaign,
  deleteUserInCampaign,
  getUserInCampaign,
  getUsersInCampaign,
} from "./userInCampaign.services";

const add = async (req: Request, res: Response) => {
  const userInCampaign = req.body as AddUserInCampaignDto;

  try {
    const createdUserInCampaign = await addUserInCampaign(userInCampaign);
    return res.status(StatusCodes.CREATED).json(createdUserInCampaign);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const userToUpdate = req.body as UpdateUserInCampaignDto;
  const idToUpdate = req.params.id;

  try {
    const updatedUserInCampaign = await updateUserInCampaign(
      idToUpdate,
      userToUpdate
    );

    return res.status(StatusCodes.OK).json(updatedUserInCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;

  try {
    await deleteUserInCampaign(idToDelete);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  const idToGet = req.params.id;

  try {
    const userInCampaign = await getUserInCampaign(idToGet);

    if (!userInCampaign) {
      return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }

    return res.status(StatusCodes.OK).json(userInCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (_: Request, res: Response) => {
  try {
    const usersInCampaign = await getUsersInCampaign();

    return res.status(StatusCodes.OK).json(usersInCampaign);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export default { add, update, remove, getById, getAll };
