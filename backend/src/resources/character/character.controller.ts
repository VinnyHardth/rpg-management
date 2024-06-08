import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { CreateCharacterDto, UpdateCharacterDto } from "./character.types";

import {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacter,
  getCharacters,
} from "./character.services";

const create = async (req: Request, res: Response) => {
  const character = req.body as CreateCharacterDto;

  try {
    const createdCharacter = await createCharacter(character);
    return res.status(StatusCodes.CREATED).json(createdCharacter);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const characterToUpdate = req.body as UpdateCharacterDto;
  const idToUpdate = req.params.id;

  try {
    const updatedCharacter = await updateCharacter(
      idToUpdate,
      characterToUpdate
    );

    return res.status(StatusCodes.OK).json(updatedCharacter);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;

  try {
    await deleteCharacter(idToDelete);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  const idToGet = req.params.id;

  try {
    const character = await getCharacter(idToGet);

    if (!character) {
      return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }

    return res.status(StatusCodes.OK).json(character);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const characters = await getCharacters();

    return res.status(StatusCodes.OK).json(characters);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

export default { create, update, remove, getById, getAll };
