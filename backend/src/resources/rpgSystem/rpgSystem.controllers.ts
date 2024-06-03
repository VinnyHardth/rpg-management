import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { CreateRpgSystemDto, UpdateRpgSystemDto } from "./rpgSystem.types";
import {
  createRpgSystem,
  updateRpgSystem,
  deleteRpgSystem,
  getRpgSystem,
  getRpgSystems,
} from "./rpgSystem.service";


const create = async (req: Request, res: Response) => {
  const rpgSystem = req.body as CreateRpgSystemDto;

  console.log(rpgSystem);

  try {
    const createdRpgSystem = await createRpgSystem(rpgSystem);
    return res.status(StatusCodes.CREATED).json(createdRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const updateRpg = req.body as UpdateRpgSystemDto;
  
  try {
    const updatedRpgSystem = await updateRpgSystem(
      Number(req.params.id),
      updateRpg
    );
    return res.status(StatusCodes.OK).json(updatedRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDeletion = Number(req.params.id);

  try {
    const deletedRpgSystem = await deleteRpgSystem(idToDeletion);
    return res.status(StatusCodes.OK).json(deletedRpgSystem);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const get = async (req: Request, res: Response) => {
  const idToGet = Number(req.params.id);

  try {
    const rpgSystem = await getRpgSystem(idToGet);
    return res.status(StatusCodes.OK).json(rpgSystem);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const rpgSystems = await getRpgSystems();
    return res.status(StatusCodes.OK).json(rpgSystems);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export default { create, update, remove, get, getAll };
