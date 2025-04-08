/*
  Warnings:

  - Added the required column `adicionado` to the `entradasEstoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `entradasestoque` ADD COLUMN `adicionado` BOOLEAN NOT NULL;
