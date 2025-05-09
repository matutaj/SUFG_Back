/*
  Warnings:

  - The `tipo` column on the `localizacoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "tipo" AS ENUM ('Armazem', 'Loja');

-- AlterTable
ALTER TABLE "localizacoes" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "tipo";
