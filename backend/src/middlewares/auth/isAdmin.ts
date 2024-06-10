import { NextFunction, Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { UserTypes } from "../../resources/userType/userType.constants";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.session.userTypeId);
  if (req.session.userTypeId === UserTypes.ADMIN) next();
  else
    return res
      .status(StatusCodes.FORBIDDEN)
      .json(ReasonPhrases.FORBIDDEN + ": Must be an admin.");
};
