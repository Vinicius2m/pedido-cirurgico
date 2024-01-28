-- CreateTable
CREATE TABLE `CirurgicRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `room` VARCHAR(191) NOT NULL,
    `procedures` VARCHAR(191) NOT NULL,
    `doctor` VARCHAR(191) NOT NULL,
    `patient` VARCHAR(191) NOT NULL,
    `hospital` VARCHAR(191) NOT NULL,
    `surgeryDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `generalNotes` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
