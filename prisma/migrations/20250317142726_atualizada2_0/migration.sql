/*
  Warnings:

  - You are about to drop the column `condigoBarras` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `codigoBarras` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `condigoBarras`,
    ADD COLUMN `codigoBarras` VARCHAR(191) NOT NULL;
