/*
  Warnings:

  - You are about to drop the column `name` on the `status_from_rpg_system` table. All the data in the column will be lost.
  - Added the required column `rpgSystemId` to the `status_from_rpg_system` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `status_from_rpg_system_name_key` ON `status_from_rpg_system`;

-- AlterTable
ALTER TABLE `status_from_rpg_system` DROP COLUMN `name`,
    ADD COLUMN `rpgSystemId` CHAR(40) NOT NULL,
    ADD COLUMN `value` SMALLINT NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `status_from_rpg_system` ADD CONSTRAINT `status_from_rpg_system_rpgSystemId_fkey` FOREIGN KEY (`rpgSystemId`) REFERENCES `rpg_systems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
