import { Campaign } from "@prisma/client";

export type CreateCampaignDto = Pick<
  Campaign,
  "rpgSystemId" | "userId" | "name" | "description"
>;
export type UpdateCampaignDto = Partial<CreateCampaignDto>;
