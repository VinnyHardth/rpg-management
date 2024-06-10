/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `user_in_campaigns` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_in_campaigns_user_id_key` ON `user_in_campaigns`(`user_id`);
