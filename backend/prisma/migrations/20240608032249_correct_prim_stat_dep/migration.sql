/*
  Warnings:

  - You are about to drop the column `primaryStatusId` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryStatusId` on the `characters` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `characters` DROP FOREIGN KEY `characters_primaryStatusId_fkey`;

-- DropForeignKey
ALTER TABLE `characters` DROP FOREIGN KEY `characters_secondaryStatusId_fkey`;

-- AlterTable
ALTER TABLE `characters` DROP COLUMN `primaryStatusId`,
    DROP COLUMN `secondaryStatusId`;

-- AlterTable
ALTER TABLE `primary_status` ADD COLUMN `characterId` CHAR(40) NULL;

-- AlterTable
ALTER TABLE `secondary_status` ADD COLUMN `characterId` CHAR(40) NULL;

-- AddForeignKey
ALTER TABLE `primary_status` ADD CONSTRAINT `primary_status_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `characters`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `secondary_status` ADD CONSTRAINT `secondary_status_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `characters`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
