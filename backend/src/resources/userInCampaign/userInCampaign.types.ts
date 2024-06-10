import { UserInCampaign } from "@prisma/client";

export type AddUserInCampaignDto = Pick<
  UserInCampaign,
  "userId" | "campaignId"
>;

export type UpdateUserInCampaignDto = AddUserInCampaignDto;
