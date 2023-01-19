/*
  Warnings:

  - You are about to drop the column `first_name` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `profile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Project_creatorId_fkey` ON `project`;

-- DropIndex
DROP INDEX `Project_joinedId_fkey` ON `project`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    ADD COLUMN `fname` VARCHAR(191) NULL,
    ADD COLUMN `lname` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_joinedId_fkey` FOREIGN KEY (`joinedId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
