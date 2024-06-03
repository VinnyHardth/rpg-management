import { RpgSystem } from "@prisma/client";

export type CreateRpgSystemDto = Pick<RpgSystem, "name">;
export type UpdateRpgSystemDto = Partial<CreateRpgSystemDto>;
