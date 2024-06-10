import { Campaign } from "@prisma/client";

export type CreateCampaignDto = Pick<
  Campaign,
  "rpgSystemId" | "name" | "description" | "masterId"
>;

export type UpdateCampaignDto = Partial<CreateCampaignDto>;
