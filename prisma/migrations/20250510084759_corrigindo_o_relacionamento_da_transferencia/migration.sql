/*
  Warnings:

  - You are about to drop the column `id_localizacao` on the `transferencias` table. All the data in the column will be lost.
  - Added the required column `id_produtoLocalizacao` to the `transferencias` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transferencias" DROP CONSTRAINT "transferencias_id_localizacao_fkey";

-- AlterTable
ALTER TABLE "transferencias" DROP COLUMN "id_localizacao",
ADD COLUMN     "id_produtoLocalizacao" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "transferencias" ADD CONSTRAINT "transferencias_id_produtoLocalizacao_fkey" FOREIGN KEY ("id_produtoLocalizacao") REFERENCES "produtosLocalizacoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
