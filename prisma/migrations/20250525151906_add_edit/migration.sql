/*
  Warnings:

  - The `dataValidadeLote` column on the `produtosLocalizacoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "produtosLocalizacoes" DROP COLUMN "dataValidadeLote",
ADD COLUMN     "dataValidadeLote" TIMESTAMP(3);
