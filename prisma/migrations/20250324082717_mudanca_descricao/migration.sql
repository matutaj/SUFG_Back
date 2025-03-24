/*
  Warnings:

  - You are about to drop the column `descricaoAlerta` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoCaixa` on the `caixas` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoCategoria` on the `categoriasprodutos` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoCorredor` on the `corredores` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoLocalizacao` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoPrateleira` on the `prateleiras` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoSeccao` on the `seccoes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `alertas` DROP COLUMN `descricaoAlerta`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `caixas` DROP COLUMN `descricaoCaixa`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `categoriasprodutos` DROP COLUMN `descricaoCategoria`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `corredores` DROP COLUMN `descricaoCorredor`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `funcoes` MODIFY `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `localizacoes` DROP COLUMN `descricaoLocalizacao`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `permissoes` MODIFY `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `prateleiras` DROP COLUMN `descricaoPrateleira`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `seccoes` DROP COLUMN `descricaoSeccao`,
    ADD COLUMN `descricao` VARCHAR(191) NULL;
