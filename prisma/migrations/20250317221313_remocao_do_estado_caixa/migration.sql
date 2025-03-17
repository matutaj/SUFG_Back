/*
  Warnings:

  - You are about to alter the column `estadoCaixa` on the `funcionarioscaixa` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `funcionarioscaixa` MODIFY `estadoCaixa` BOOLEAN NOT NULL;
