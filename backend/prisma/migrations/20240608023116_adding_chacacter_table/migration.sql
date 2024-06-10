-- CreateTable
CREATE TABLE `characters` (
    `id` CHAR(40) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `user_in_campaign_id` CHAR(40) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `characters` ADD CONSTRAINT `characters_user_in_campaign_id_fkey` FOREIGN KEY (`user_in_campaign_id`) REFERENCES `user_in_campaigns`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
