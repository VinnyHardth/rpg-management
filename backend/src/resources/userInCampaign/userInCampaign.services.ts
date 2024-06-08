import { PrismaClient, UserInCampaign } from "@prisma/client";
import {
  AddUserInCampaignDto,
  UpdateUserInCampaignDto,
} from "./userInCampaign.types";

const prisma = new PrismaClient();

export const addUserInCampaign = async (
  userInCampaign: AddUserInCampaignDto
): Promise<UserInCampaign> => {
  return prisma.userInCampaign.create({ data: userInCampaign });
};

export const updateUserInCampaign = async (
  id: string,
  userInCampaign: UpdateUserInCampaignDto
): Promise<UserInCampaign> => {
  return prisma.userInCampaign.update({
    where: { id },
    data: userInCampaign,
  });
};

export const deleteUserInCampaign = async (
  id: string
): Promise<UserInCampaign> => {
  return prisma.userInCampaign.delete({ where: { id } });
};

export const getUserInCampaign = async (
  id: string
): Promise<UserInCampaign | null> => {
  return prisma.userInCampaign.findUnique({ where: { id } });
};

export const getUsersInCampaign = async (): Promise<UserInCampaign[]> => {
  return prisma.userInCampaign.findMany();
};
