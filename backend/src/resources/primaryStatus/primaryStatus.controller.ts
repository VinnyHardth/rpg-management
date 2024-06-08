import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import {
  AddPrimaryStatusDto,
  UpdatePrimaryStatusDto,
} from "./primaryStatus.types";

import {
  addPrimaryStatus,
  updatePrimaryStatus,
  deletePrimaryStatus,
  getPrimaryStatus,
  getPrimaryStatuses,
} from "./primaryStatus.services";

const add = async (req: Request, res: Response) => {
  const primaryStatus = req.body as AddPrimaryStatusDto;

  try {
    const createdPrimaryStatus = await addPrimaryStatus(primaryStatus);
    return res.status(StatusCodes.CREATED).json(createdPrimaryStatus);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const primaryStatusToUpdate = req.body as UpdatePrimaryStatusDto;
  const idToUpdate = req.params.id;

  try {
    const updatedPrimaryStatus = await updatePrimaryStatus(
      idToUpdate,
      primaryStatusToUpdate
    );

    return res.status(StatusCodes.OK).json(updatedPrimaryStatus);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;

  try {
    await deletePrimaryStatus(idToDelete);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  const idToGet = req.params.id;

  try {
    const primaryStatus = await getPrimaryStatus(idToGet);

    if (!primaryStatus) {
      return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }

    return res.status(StatusCodes.OK).json(primaryStatus);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const primaryStatuses = await getPrimaryStatuses();

    return res.status(StatusCodes.OK).json(primaryStatuses);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export default { add, update, remove, getById, getAll };
