/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `campaigns` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[statusId]` on the table `status_from_rpg_system` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `campaigns_name_key` ON `campaigns`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `status_from_rpg_system_statusId_key` ON `status_from_rpg_system`(`statusId`);
