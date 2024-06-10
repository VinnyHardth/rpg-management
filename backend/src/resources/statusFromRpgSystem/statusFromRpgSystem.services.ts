import { PrismaClient, StatusFromRpgSystem } from "@prisma/client";
import {
  AddStatusFromRpgSystemDto,
  UpdateStatusFromRpgSystemDto,
} from "./statusFromRpgSystem.types";

const prisma = new PrismaClient();

export const addStatusFromRpgSystem = async (
  statusFromRpgSystem: AddStatusFromRpgSystemDto
): Promise<StatusFromRpgSystem> => {
  return prisma.statusFromRpgSystem.create({ data: statusFromRpgSystem });
};

export const updateStatusFromRpgSystem = async (
  id: string,
  statusFromRpgSystem: UpdateStatusFromRpgSystemDto
): Promise<StatusFromRpgSystem> => {
  return prisma.statusFromRpgSystem.update({
    where: { id },
    data: statusFromRpgSystem,
  });
};

export const deleteStatusFromRpgSystem = async (
  id: string
): Promise<StatusFromRpgSystem> => {
  return prisma.statusFromRpgSystem.delete({ where: { id } });
};

export const getStatusFromRpgSystem = async (
  id: string
): Promise<StatusFromRpgSystem | null> => {
  return prisma.statusFromRpgSystem.findUnique({ where: { id } });
};

export const getStatusesFromRpgSystem = async (): Promise<
  StatusFromRpgSystem[]
> => {
  return prisma.statusFromRpgSystem.findMany();
};
