import { SecondaryStatus } from "@prisma/client";

export type AddSecondaryStatusDto = Pick<
  SecondaryStatus,
  "value" | "systemStatusId" | "characterId"
>;

export type UpdateSecondaryStatusDto = Partial<AddSecondaryStatusDto>;
