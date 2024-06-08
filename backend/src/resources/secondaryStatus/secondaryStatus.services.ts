import { PrismaClient, SecondaryStatus } from "@prisma/client";
import {
  AddSecondaryStatusDto,
  UpdateSecondaryStatusDto,
} from "./secondaryStatus.types";

const prisma = new PrismaClient();

export const addSecondaryStatus = async (
  secondaryStatus: AddSecondaryStatusDto
): Promise<SecondaryStatus> => {
  return prisma.secondaryStatus.create({ data: secondaryStatus });
};

export const updateSecondaryStatus = async (
  id: string,
  secondaryStatus: UpdateSecondaryStatusDto
): Promise<SecondaryStatus> => {
  return prisma.secondaryStatus.update({
    where: { id },
    data: secondaryStatus,
  });
};

export const deleteSecondaryStatus = async (
  id: string
): Promise<SecondaryStatus> => {
  return prisma.secondaryStatus.delete({ where: { id } });
};

export const getSecondaryStatus = async (
  id: string
): Promise<SecondaryStatus | null> => {
  return prisma.secondaryStatus.findUnique({ where: { id } });
};

export const getSecondaryStatuses = async (): Promise<SecondaryStatus[]> => {
  return prisma.secondaryStatus.findMany();
};
