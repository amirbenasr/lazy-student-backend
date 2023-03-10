-- DropIndex
DROP INDEX `Project_creatorId_fkey` ON `project`;

-- DropIndex
DROP INDEX `Project_joinedId_fkey` ON `project`;

-- DropIndex
DROP INDEX `Proposal_projectId_fkey` ON `proposal`;

-- DropIndex
DROP INDEX `Proposal_userId_fkey` ON `proposal`;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_joinedId_fkey` FOREIGN KEY (`joinedId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
