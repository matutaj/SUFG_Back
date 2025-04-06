-- CreateTable
CREATE TABLE `estoques` (
    `id` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `quantidadeAtual` VARCHAR(191) NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `dataValidadeLote` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `estoques` ADD CONSTRAINT `estoques_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
