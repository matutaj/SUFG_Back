/*
  Warnings:

  - You are about to alter the column `quantidadeAtual` on the `estoques` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `estoques` MODIFY `quantidadeAtual` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `vendas` MODIFY `id_cliente` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `tarefas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosTarefas` (
    `id` VARCHAR(191) NOT NULL,
    `id_funcionario` VARCHAR(191) NOT NULL,
    `id_tarefa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `funcionariosTarefas` ADD CONSTRAINT `funcionariosTarefas_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosTarefas` ADD CONSTRAINT `funcionariosTarefas_id_tarefa_fkey` FOREIGN KEY (`id_tarefa`) REFERENCES `tarefas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
