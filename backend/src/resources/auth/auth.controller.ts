import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { createUser } from "../user/user.service";
import { checkCredentials } from "./auth.services";

const signup = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await createUser(user, "client");
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const login = async (req: Request, res: Response) => {
  const loginDto = req.body;
  try {
    const user = await checkCredentials(loginDto);

    if (!user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(ReasonPhrases.UNAUTHORIZED);

    req.session.uid = user.id;
    req.session.userTypeId = user.userTypeId;
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const logout = async (req: Request, res: Response) => {
  if (req.session.uid) {
    req.session.destroy(() => {
      res.status(StatusCodes.OK).json(ReasonPhrases.OK);
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
  }
};

export default { signup, login, logout };
