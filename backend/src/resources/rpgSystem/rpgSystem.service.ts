import { PrismaClient, RpgSystem } from "@prisma/client";

import { CreateRpgSystemDto, UpdateRpgSystemDto } from "./rpgSystem.types";

const prisma = new PrismaClient();

export const createRpgSystem = async (
  rpgSystem: CreateRpgSystemDto
): Promise<RpgSystem> => {
  return prisma.rpgSystem.create({ data: rpgSystem });
};

export const getRpgSystems = async (): Promise<RpgSystem[]> => {
  return prisma.rpgSystem.findMany();
};
