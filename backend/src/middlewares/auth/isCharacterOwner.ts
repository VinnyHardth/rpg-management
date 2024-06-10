import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const isCharacterOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { uid } = req.session;

  try {
    // Consulta o personagem no banco de dados pelo ID fornecido
    const character = await prisma.character.findFirst({
      where: {
        id: id,
      },
    });

    // Se o personagem não for encontrado, retorna 404 Not Found
    if (!character) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json(`${ReasonPhrases.NOT_FOUND}: Character not found.`);
    }

    // Consulta a associação do usuário na campanha do personagem
    const userInCampaign = await prisma.userInCampaign.findFirst({
      where: {
        id: character.userInCampaignId,
      },
    });

    // Verifica se o usuário atual é o mestre da campanha associada ao personagem
    if (userInCampaign?.userId === uid) {
      next(); // Permite a continuação da requisição
    } else {
      // Se o usuário não for o mestre, retorna 401 Unauthorized
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(`${ReasonPhrases.UNAUTHORIZED}: Must be character owner.`);
    }
  } catch (error) {
    console.error("Error checking character ownership:", error);
    // Retorna 500 Internal Server Error em caso de falha na verificação
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};
