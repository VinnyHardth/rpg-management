import { Campaign } from "@prisma/client";

export type CreateCampaignDto = Pick<
  Campaign,
  "name" | "rpgSystemId" | "userId" | "description"
>;
export type UpdateCampaignDto = Partial<CreateCampaignDto>;
