/*
  Warnings:

  - You are about to drop the column `id_corredor` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `id_prateleira` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `id_seccao` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `dataValidade` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the `transacaoes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dataValidadeLote` to the `entradasEstoque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lote` to the `entradasEstoque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condigoBarras` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeConteudo` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeMedida` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_corredor` to the `produtosLocalizacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_prateleira` to the `produtosLocalizacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_seccao` to the `produtosLocalizacoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `localizacoes` DROP FOREIGN KEY `localizacoes_id_corredor_fkey`;

-- DropForeignKey
ALTER TABLE `localizacoes` DROP FOREIGN KEY `localizacoes_id_prateleira_fkey`;

-- DropForeignKey
ALTER TABLE `localizacoes` DROP FOREIGN KEY `localizacoes_id_seccao_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_id_caixa_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_id_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_id_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_id_produto_fkey`;

-- DropIndex
DROP INDEX `localizacoes_id_corredor_fkey` ON `localizacoes`;

-- DropIndex
DROP INDEX `localizacoes_id_prateleira_fkey` ON `localizacoes`;

-- DropIndex
DROP INDEX `localizacoes_id_seccao_fkey` ON `localizacoes`;

-- AlterTable
ALTER TABLE `entradasestoque` ADD COLUMN `dataValidadeLote` DATETIME(3) NOT NULL,
    ADD COLUMN `lote` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `localizacoes` DROP COLUMN `id_corredor`,
    DROP COLUMN `id_prateleira`,
    DROP COLUMN `id_seccao`;

-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `dataValidade`,
    ADD COLUMN `condigoBarras` VARCHAR(191) NOT NULL,
    ADD COLUMN `unidadeConteudo` VARCHAR(191) NOT NULL,
    ADD COLUMN `unidadeMedida` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `produtoslocalizacoes` ADD COLUMN `id_corredor` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_prateleira` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_seccao` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `transacaoes`;

-- CreateTable
CREATE TABLE `vendas` (
    `id` VARCHAR(191) NOT NULL,
    `id_cliente` VARCHAR(191) NOT NULL,
    `id_funcionarioCaixa` VARCHAR(191) NOT NULL,
    `numeroDocumento` VARCHAR(191) NOT NULL,
    `tipoDocumento` ENUM('FATURA', 'RECIBO', 'FATURA_PROFORMA', 'FATURA_RECIBO') NOT NULL,
    `dataEmissao` DATETIME(3) NOT NULL,
    `dataValidade` DATETIME(3) NOT NULL,
    `valorTotal` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendasProdutos` (
    `id` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `id_venda` VARCHAR(191) NOT NULL,
    `quantidadeVendida` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_funcionarioCaixa_fkey` FOREIGN KEY (`id_funcionarioCaixa`) REFERENCES `funcionariosCaixa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendasProdutos` ADD CONSTRAINT `vendasProdutos_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_seccao_fkey` FOREIGN KEY (`id_seccao`) REFERENCES `seccoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_prateleira_fkey` FOREIGN KEY (`id_prateleira`) REFERENCES `prateleiras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_corredor_fkey` FOREIGN KEY (`id_corredor`) REFERENCES `corredores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
