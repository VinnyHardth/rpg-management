import { StatusFromRpgSystem } from "@prisma/client";

export type AddStatusFromRpgSystemDto = Pick<
  StatusFromRpgSystem,
  "statusId" | "rpgSystemId"
>;

export type UpdateStatusFromRpgSystemDto = AddStatusFromRpgSystemDto;
