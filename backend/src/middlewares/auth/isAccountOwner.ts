import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const isAccountOwner = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.uid === req.params.id) next();
  else
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(ReasonPhrases.UNAUTHORIZED + ": Must be the owner.");
};
