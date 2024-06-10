import { PrismaClient, Campaign } from "@prisma/client";

import { CreateCampaignDto, UpdateCampaignDto } from "./campaign.types";

const prisma = new PrismaClient();

export const createCampaign = async (
  campaign: CreateCampaignDto
): Promise<Campaign> => {
  return prisma.campaign.create({ data: campaign });
};

export const updateCampaign = async (
  id: string,
  campaign: UpdateCampaignDto
): Promise<Campaign> => {
  return prisma.campaign.update({ where: { id }, data: campaign });
};

export const removeCampaign = async (id: string): Promise<Campaign> => {
  return prisma.campaign.delete({ where: { id } });
};

export const getCampaign = async (id: string): Promise<Campaign | null> => {
  return prisma.campaign.findUnique({ where: { id } });
};

export const getAllCampaigns = async (): Promise<Campaign[]> => {
  return prisma.campaign.findMany();
};

export default {
  createCampaign,
  updateCampaign,
  removeCampaign,
  getCampaign,
  getAllCampaigns,
};
