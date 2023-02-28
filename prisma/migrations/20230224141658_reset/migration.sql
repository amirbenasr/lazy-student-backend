-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('STUDENT', 'PROFESSOR') NULL DEFAULT 'STUDENT',
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `verified` BOOLEAN NULL DEFAULT false,
    `verifToken` VARCHAR(191) NULL,
    `resetToken` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` VARCHAR(191) NOT NULL,
    `fname` VARCHAR(191) NULL,
    `lname` VARCHAR(191) NULL,
    `dob` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `country` VARCHAR(191) NULL DEFAULT 'international',
    `bio` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL DEFAULT 'monkey',
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proposal` (
    `id` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `pages` INTEGER NOT NULL DEFAULT 1,
    `budget` INTEGER NOT NULL,
    `type` ENUM('MOBILE', 'WEB', 'BACKEND', 'FULLSTACK') NOT NULL,
    `technology` ENUM('FLUTTER', 'REACT', 'VUEJS', 'NEXTJS', 'NATIVE', 'STATIC', 'LARAVEL', 'REACTNATIVE', 'ANDROID', 'IOS') NOT NULL,
    `creatorId` VARCHAR(191) NOT NULL,
    `joinedId` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'MATCHED', 'FINISHED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deadline` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
