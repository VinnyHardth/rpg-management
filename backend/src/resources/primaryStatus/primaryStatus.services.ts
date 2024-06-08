import { PrismaClient, PrimaryStatus } from "@prisma/client";
import {
  AddPrimaryStatusDto,
  UpdatePrimaryStatusDto,
} from "./primaryStatus.types";

const prisma = new PrismaClient();

export const addPrimaryStatus = async (
  primaryStatus: AddPrimaryStatusDto
): Promise<PrimaryStatus> => {
  return prisma.primaryStatus.create({ data: primaryStatus });
};

export const updatePrimaryStatus = async (
  id: string,
  primaryStatus: UpdatePrimaryStatusDto
): Promise<PrimaryStatus> => {
  return prisma.primaryStatus.update({
    where: { id },
    data: primaryStatus,
  });
};

export const deletePrimaryStatus = async (
  id: string
): Promise<PrimaryStatus> => {
  return prisma.primaryStatus.delete({ where: { id } });
};

export const getPrimaryStatus = async (
  id: string
): Promise<PrimaryStatus | null> => {
  return prisma.primaryStatus.findUnique({ where: { id } });
};

export const getPrimaryStatuses = async (): Promise<PrimaryStatus[]> => {
  return prisma.primaryStatus.findMany();
};
