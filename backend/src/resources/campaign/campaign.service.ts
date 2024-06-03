import { PrismaClient, Campaign } from "@prisma/client";

import { CreateCampaignDto, UpdateCampaignDto } from "./campaign.types";

const prisma = new PrismaClient();

export const createCampaign = async (
  campaign: CreateCampaignDto
): Promise<Campaign> => {
  return prisma.campaign.create({ data: campaign });
};
