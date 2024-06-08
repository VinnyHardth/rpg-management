/*
  Warnings:

  - A unique constraint covering the columns `[characterId]` on the table `primary_status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId]` on the table `secondary_status` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `master_id` to the `campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `campaigns` ADD COLUMN `master_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `primary_status_characterId_key` ON `primary_status`(`characterId`);

-- CreateIndex
CREATE UNIQUE INDEX `secondary_status_characterId_key` ON `secondary_status`(`characterId`);

-- AddForeignKey
ALTER TABLE `campaigns` ADD CONSTRAINT `campaigns_master_id_fkey` FOREIGN KEY (`master_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
