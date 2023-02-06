-- DropIndex
DROP INDEX `Project_creatorId_fkey` ON `project`;

-- DropIndex
DROP INDEX `Project_joinedId_fkey` ON `project`;

-- AlterTable
ALTER TABLE `profile` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_joinedId_fkey` FOREIGN KEY (`joinedId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
