import { Character } from "@prisma/client";

export type CreateCharacterDto = Pick<
  Character,
  "name" | "description" | "userInCampaignId"
>;

export type UpdateCharacterDto = Omit<CreateCharacterDto, "userInCampaignId">;
