/*
  Warnings:

  - Added the required column `dataAtividade` to the `funcionariosTarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `funcionariosTarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funcionariostarefas` ADD COLUMN `dataAtividade` DATETIME(3) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
