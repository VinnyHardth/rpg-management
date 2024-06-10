import { PrismaClient, RpgSystem } from "@prisma/client";

import { CreateRpgSystemDto, UpdateRpgSystemDto } from "./rpgSystem.types";

const prisma = new PrismaClient();

export const checkNameAvailability = async (
  name: string,
  ignore?: string
): Promise<boolean> => {
  const rpgSystem = await prisma.rpgSystem.findFirst({
    where: { name, id: { not: ignore } },
  });

  return rpgSystem === null;
};

export const createRpgSystem = async (
  rpgSystem: CreateRpgSystemDto
): Promise<RpgSystem> => {
  return prisma.rpgSystem.create({ data: rpgSystem });
};

export const updateRpgSystem = async (
  id: string,
  rpgSystem: UpdateRpgSystemDto
): Promise<RpgSystem> => {
  return prisma.rpgSystem.update({ where: { id }, data: rpgSystem });
};

export const deleteRpgSystem = async (id: string): Promise<RpgSystem> => {
  return prisma.rpgSystem.delete({ where: { id } });
};

export const getRpgSystem = async (id: string): Promise<RpgSystem | null> => {
  return prisma.rpgSystem.findUnique({ where: { id } });
};

export const getRpgSystems = async (): Promise<RpgSystem[]> => {
  return prisma.rpgSystem.findMany();
};
