import { Status } from "@prisma/client";

export type CreateStatusDto = Pick<Status, "name">;
export type UpdateStatusDto = CreateStatusDto;
