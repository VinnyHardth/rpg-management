import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import {
  AddStatusFromRpgSystemDto,
  UpdateStatusFromRpgSystemDto,
} from "./statusFromRpgSystem.types";

import {
  addStatusFromRpgSystem,
  updateStatusFromRpgSystem,
  deleteStatusFromRpgSystem,
  getStatusFromRpgSystem,
  getStatusesFromRpgSystem,
} from "./statusFromRpgSystem.services";

const add = async (req: Request, res: Response) => {
  const statusFromRpgSystem = req.body as AddStatusFromRpgSystemDto;

  try {
    const createdStatusFromRpgSystem =
      await addStatusFromRpgSystem(statusFromRpgSystem);
    return res.status(StatusCodes.CREATED).json(createdStatusFromRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const statusToUpdate = req.body as UpdateStatusFromRpgSystemDto;
  const idToUpdate = req.params.id;

  try {
    const updatedStatusFromRpgSystem = await updateStatusFromRpgSystem(
      idToUpdate,
      statusToUpdate
    );

    return res.status(StatusCodes.OK).json(updatedStatusFromRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;

  try {
    await deleteStatusFromRpgSystem(idToDelete);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  const idToGet = req.params.id;

  try {
    const statusFromRpgSystem = await getStatusFromRpgSystem(idToGet);

    if (!statusFromRpgSystem) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: ReasonPhrases.NOT_FOUND,
        message: "Status not found",
      });
    }

    return res.status(StatusCodes.OK).json(statusFromRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const statusesFromRpgSystem = await getStatusesFromRpgSystem();

    return res.status(StatusCodes.OK).json(statusesFromRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export default {
  add,
  update,
  remove,
  getById,
  getAll,
};
