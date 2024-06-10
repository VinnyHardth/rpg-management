/*
  Warnings:

  - You are about to drop the column `name` on the `primary_status` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `secondary_status` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `primary_status_name_key` ON `primary_status`;

-- DropIndex
DROP INDEX `secondary_status_name_key` ON `secondary_status`;

-- AlterTable
ALTER TABLE `characters` ADD COLUMN `primaryStatusId` CHAR(36) NULL,
    ADD COLUMN `secondaryStatusId` CHAR(36) NULL;

-- AlterTable
ALTER TABLE `primary_status` DROP COLUMN `name`;

-- AlterTable
ALTER TABLE `secondary_status` DROP COLUMN `name`;

-- AddForeignKey
ALTER TABLE `characters` ADD CONSTRAINT `characters_primaryStatusId_fkey` FOREIGN KEY (`primaryStatusId`) REFERENCES `primary_status`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `characters` ADD CONSTRAINT `characters_secondaryStatusId_fkey` FOREIGN KEY (`secondaryStatusId`) REFERENCES `secondary_status`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
