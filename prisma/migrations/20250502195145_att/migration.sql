/*
  Warnings:

  - You are about to drop the `funcionariosFuncoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `funcionariosPermissoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "funcionariosFuncoes" DROP CONSTRAINT "funcionariosFuncoes_id_funcao_fkey";

-- DropForeignKey
ALTER TABLE "funcionariosFuncoes" DROP CONSTRAINT "funcionariosFuncoes_id_funcionario_fkey";

-- DropForeignKey
ALTER TABLE "funcionariosPermissoes" DROP CONSTRAINT "funcionariosPermissoes_id_funcionario_fkey";

-- DropForeignKey
ALTER TABLE "funcionariosPermissoes" DROP CONSTRAINT "funcionariosPermissoes_id_permissao_fkey";

-- AlterTable
ALTER TABLE "funcionarios" ADD COLUMN     "id_funcao" TEXT;

-- DropTable
DROP TABLE "funcionariosFuncoes";

-- DropTable
DROP TABLE "funcionariosPermissoes";

-- AddForeignKey
ALTER TABLE "funcionarios" ADD CONSTRAINT "funcionarios_id_funcao_fkey" FOREIGN KEY ("id_funcao") REFERENCES "funcoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
