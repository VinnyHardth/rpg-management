import { PrismaClient, RpgSystem } from "@prisma/client";

import { CreateRpgSystemDto, UpdateRpgSystemDto } from "./rpgSystem.types";

const prisma = new PrismaClient();

export const createRpgSystem = async (
  rpgSystem: CreateRpgSystemDto
): Promise<RpgSystem> => {
  return prisma.rpgSystem.create({ data: rpgSystem });
};

export const updateRpgSystem = async (
  id: number,
  rpgSystem: UpdateRpgSystemDto
): Promise<RpgSystem> => {
  return prisma.rpgSystem.update({ where: { id }, data: rpgSystem });
}

export const deleteRpgSystem = async (id: number): Promise<RpgSystem> => {
  return prisma.rpgSystem.delete({ where: { id } });
}

export const getRpgSystem = async (id: number): Promise<RpgSystem | null> => {
  return prisma.rpgSystem.findUnique({ where: { id } });
};

export const getRpgSystems = async (): Promise<RpgSystem[]> => {
  return prisma.rpgSystem.findMany();
};
