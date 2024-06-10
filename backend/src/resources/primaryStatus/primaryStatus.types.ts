import { PrimaryStatus } from "@prisma/client";

export type AddPrimaryStatusDto = Pick<
  PrimaryStatus,
  "value" | "systemStatusId" | "characterId"
>;

export type UpdatePrimaryStatusDto = Partial<AddPrimaryStatusDto>;
