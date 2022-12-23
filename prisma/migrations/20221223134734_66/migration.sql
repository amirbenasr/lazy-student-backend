-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('MOBILE', 'WEB', 'BACKEND', 'FULLSTACK') NOT NULL,
    `technology` ENUM('FLUTTER', 'REACT', 'VUEJS', 'NEXTJS', 'NATIVE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
