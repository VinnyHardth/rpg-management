import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { createRpgSystem } from "./rpgSystem.service";
import { CreateRpgSystemDto } from "./rpgSystem.types";

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

export default { create };
