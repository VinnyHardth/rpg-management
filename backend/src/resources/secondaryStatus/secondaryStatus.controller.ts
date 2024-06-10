import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import {
  AddSecondaryStatusDto,
  UpdateSecondaryStatusDto,
} from "./secondaryStatus.types";

import {
  addSecondaryStatus,
  updateSecondaryStatus,
  deleteSecondaryStatus,
  getSecondaryStatus,
  getSecondaryStatuses,
} from "./secondaryStatus.services";

const add = async (req: Request, res: Response) => {
  const secondaryStatus = req.body as AddSecondaryStatusDto;

  try {
    const createdSecondaryStatus = await addSecondaryStatus(secondaryStatus);
    return res.status(StatusCodes.CREATED).json(createdSecondaryStatus);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const secondaryStatusToUpdate = req.body as UpdateSecondaryStatusDto;
  const idToUpdate = req.params.id;

  try {
    const updatedSecondaryStatus = await updateSecondaryStatus(
      idToUpdate,
      secondaryStatusToUpdate
    );

    return res.status(StatusCodes.OK).json(updatedSecondaryStatus);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;

  try {
    await deleteSecondaryStatus(idToDelete);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  const idToGet = req.params.id;

  try {
    const secondaryStatus = await getSecondaryStatus(idToGet);

    if (!secondaryStatus) {
      return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }

    return res.status(StatusCodes.OK).json(secondaryStatus);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (_: Request, res: Response) => {
  try {
    const secondaryStatuses = await getSecondaryStatuses();

    return res.status(StatusCodes.OK).json(secondaryStatuses);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export default { add, update, remove, getById, getAll };
