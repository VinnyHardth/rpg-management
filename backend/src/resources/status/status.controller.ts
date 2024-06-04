import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { CreateStatusDto, UpdateStatusDto } from "./status.types";
import {
  checkNameAvailability,
  createStatus,
  updateStatus,
  deleteStatus,
  getStatus,
  getStatuses,
} from "./status.services";

const create = async (req: Request, res: Response) => {
  const status = req.body as CreateStatusDto;

  try {
    const isNameAvailable = await checkNameAvailability(status.name);

    if (!isNameAvailable) {
      return res.status(StatusCodes.CONFLICT).json({
        error: ReasonPhrases.CONFLICT,
        message: "Name already in use",
      });
    }

    const createdStatus = await createStatus(status);
    return res.status(StatusCodes.CREATED).json(createdStatus);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const statusToUpdate = req.body as UpdateStatusDto;
  const idToUpdate = req.params.id;

  const isNameAvailable = await checkNameAvailability(
    statusToUpdate.name,
    idToUpdate
  );

  if (!isNameAvailable) {
    return res.status(StatusCodes.CONFLICT).json({
      error: ReasonPhrases.CONFLICT,
      message: "Name already in use",
    });
  }

  try {
    const updatedStatus = await updateStatus(idToUpdate, statusToUpdate);

    return res.status(StatusCodes.OK).json(updatedStatus);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;

  try {
    await deleteStatus(idToDelete);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const statuses = await getStatuses();

    return res.status(StatusCodes.OK).json(statuses);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const status = await getStatus(id);

    if (!status) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: ReasonPhrases.NOT_FOUND,
        message: "Status not found",
      });
    }

    return res.status(StatusCodes.OK).json(status);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export default {
  create,
  update,
  remove,
  getAll,
  getById,
};
