/*
  Warnings:

  - You are about to alter the column `system_status_id` on the `primary_status` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.

*/
-- DropForeignKey
ALTER TABLE `primary_status` DROP FOREIGN KEY `primary_status_system_status_id_fkey`;

-- AlterTable
ALTER TABLE `primary_status` MODIFY `system_status_id` CHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE `primary_status` ADD CONSTRAINT `primary_status_system_status_id_fkey` FOREIGN KEY (`system_status_id`) REFERENCES `status_from_rpg_system`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
