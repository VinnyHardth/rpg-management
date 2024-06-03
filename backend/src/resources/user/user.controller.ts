import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import { UserType, CreateUserDto } from "./user.types";

import {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
} from "./user.service";

const create = async (req: Request, res: Response): Promise<void> => {
  const user = req.body as CreateUserDto;
  const type = req.query.type as UserType;

  try {
    const createdUser = await createUser(user, type);

    res.status(StatusCodes.CREATED).json(createdUser);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  const user = req.body as CreateUserDto;
  const id = req.params.id;

  try {
    const updatedUser = await updateUser(id, user);

    res.status(StatusCodes.OK).json(updatedUser);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const remove = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    await deleteUser(id);

    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const user = await getUserById(id);

    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getByUsername = async (req: Request, res: Response): Promise<void> => {
  const username = req.params.username;

  try {
    const user = await getUserByUsername(username);

    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getByEmail = async (req: Request, res: Response): Promise<void> => {
  const email = req.params.email;

  try {
    const user = await getUserByEmail(email);

    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();

    res.status(StatusCodes.OK).json(users);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export default {
  create,
  getAll,
  getById,
  getByUsername,
  getByEmail,
  update,
  remove,
};
