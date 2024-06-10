import { PrismaClient, Status } from "@prisma/client";

import { CreateStatusDto, UpdateStatusDto } from "./status.types";

const prisma = new PrismaClient();

export const checkNameAvailability = async (
  name: string,
  ignore?: string
): Promise<boolean> => {
  const status = await prisma.status.findFirst({
    where: { name, id: { not: ignore } },
  });

  return status === null;
};

export const createStatus = async (
  status: CreateStatusDto
): Promise<Status> => {
  return prisma.status.create({ data: status });
};

export const updateStatus = async (
  id: string,
  status: UpdateStatusDto
): Promise<Status> => {
  return prisma.status.update({ where: { id }, data: status });
};

export const deleteStatus = async (id: string): Promise<Status> => {
  return prisma.status.delete({ where: { id } });
};

export const getStatus = async (id: string): Promise<Status | null> => {
  return prisma.status.findUnique({ where: { id } });
};

export const getStatuses = async (): Promise<Status[]> => {
  return prisma.status.findMany();
};
