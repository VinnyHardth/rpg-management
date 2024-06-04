/*
  Warnings:

  - You are about to drop the column `type_id` on the `primary_status` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `secondary_status` table. All the data in the column will be lost.
  - You are about to drop the `status_types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `system_status_id` to the `primary_status` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `primary_status` DROP FOREIGN KEY `primary_status_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `secondary_status` DROP FOREIGN KEY `secondary_status_type_id_fkey`;

-- AlterTable
ALTER TABLE `primary_status` DROP COLUMN `type_id`,
    ADD COLUMN `system_status_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `secondary_status` DROP COLUMN `type_id`,
    ADD COLUMN `system_status_id` CHAR(36) NULL;

-- DropTable
DROP TABLE `status_types`;

-- CreateTable
CREATE TABLE `status_from_rpg_system` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `statusId` CHAR(36) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `status_from_rpg_system_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `status_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `status_from_rpg_system` ADD CONSTRAINT `status_from_rpg_system_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `primary_status` ADD CONSTRAINT `primary_status_system_status_id_fkey` FOREIGN KEY (`system_status_id`) REFERENCES `status_from_rpg_system`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `secondary_status` ADD CONSTRAINT `secondary_status_system_status_id_fkey` FOREIGN KEY (`system_status_id`) REFERENCES `status_from_rpg_system`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
