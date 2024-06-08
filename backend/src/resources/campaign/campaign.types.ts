import { Campaign } from "@prisma/client";

export type CreateCampaignDto = Pick<
  Campaign,
  "rpgSystemId" | "name" | "description"
>;

export type UpdateCampaignDto = Partial<CreateCampaignDto>;
