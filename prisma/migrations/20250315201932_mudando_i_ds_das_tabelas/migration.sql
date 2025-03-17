/*
  Warnings:

  - The primary key for the `alertas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_alerta` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the column `ID_caixa` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produto` on the `alertas` table. All the data in the column will be lost.
  - The primary key for the `caixas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_caixa` on the `caixas` table. All the data in the column will be lost.
  - The primary key for the `categoriasprodutos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_categoriaProduto` on the `categoriasprodutos` table. All the data in the column will be lost.
  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_cliente` on the `clientes` table. All the data in the column will be lost.
  - The primary key for the `corredores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_corredor` on the `corredores` table. All the data in the column will be lost.
  - The primary key for the `entradasestoque` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_entradaEstoque` on the `entradasestoque` table. All the data in the column will be lost.
  - You are about to drop the column `ID_fornecedor` on the `entradasestoque` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionario` on the `entradasestoque` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produto` on the `entradasestoque` table. All the data in the column will be lost.
  - The primary key for the `fornecedores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_fornecedor` on the `fornecedores` table. All the data in the column will be lost.
  - The primary key for the `funcionarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_funcionario` on the `funcionarios` table. All the data in the column will be lost.
  - The primary key for the `funcionarioscaixa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_caixa` on the `funcionarioscaixa` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionario` on the `funcionarioscaixa` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionarioCaixa` on the `funcionarioscaixa` table. All the data in the column will be lost.
  - The primary key for the `funcionariosfuncoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_funcao` on the `funcionariosfuncoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionario` on the `funcionariosfuncoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionarioFuncao` on the `funcionariosfuncoes` table. All the data in the column will be lost.
  - The primary key for the `funcionariospermissoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_funcionario` on the `funcionariospermissoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionarioPermissao` on the `funcionariospermissoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_permissao` on the `funcionariospermissoes` table. All the data in the column will be lost.
  - The primary key for the `funcoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_funcao` on the `funcoes` table. All the data in the column will be lost.
  - The primary key for the `funcoespermissoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_funcao` on the `funcoespermissoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcaoPermissao` on the `funcoespermissoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_permissao` on the `funcoespermissoes` table. All the data in the column will be lost.
  - The primary key for the `localizacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_corredor` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_localizacao` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_prateleira` on the `localizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_seccao` on the `localizacoes` table. All the data in the column will be lost.
  - The primary key for the `permissoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_permissao` on the `permissoes` table. All the data in the column will be lost.
  - The primary key for the `prateleiras` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_prateleira` on the `prateleiras` table. All the data in the column will be lost.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_categoriaProduto` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produto` on the `produtos` table. All the data in the column will be lost.
  - The primary key for the `produtoslocalizacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_localizacao` on the `produtoslocalizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produto` on the `produtoslocalizacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produtoLocalizacao` on the `produtoslocalizacoes` table. All the data in the column will be lost.
  - The primary key for the `seccoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_seccao` on the `seccoes` table. All the data in the column will be lost.
  - The primary key for the `transacaoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_cliente` on the `transacaoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_funcionario` on the `transacaoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produto` on the `transacaoes` table. All the data in the column will be lost.
  - You are about to drop the column `ID_transacao` on the `transacaoes` table. All the data in the column will be lost.
  - The primary key for the `transferencias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_funcionario` on the `transferencias` table. All the data in the column will be lost.
  - You are about to drop the column `ID_localizacao` on the `transferencias` table. All the data in the column will be lost.
  - You are about to drop the column `ID_produto` on the `transferencias` table. All the data in the column will be lost.
  - You are about to drop the column `ID_transferencia` on the `transferencias` table. All the data in the column will be lost.
  - The required column `id` was added to the `alertas` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_caixa` to the `alertas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_produto` to the `alertas` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `caixas` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `categoriasProdutos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `clientes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `corredores` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `entradasEstoque` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_fornecedor` to the `entradasEstoque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_funcionario` to the `entradasEstoque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_produto` to the `entradasEstoque` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `fornecedores` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `funcionarios` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `funcionariosCaixa` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_caixa` to the `funcionariosCaixa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_funcionario` to the `funcionariosCaixa` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `funcionariosFuncoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_funcao` to the `funcionariosFuncoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_funcionario` to the `funcionariosFuncoes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `funcionariosPermissoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_funcionario` to the `funcionariosPermissoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_permissao` to the `funcionariosPermissoes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `funcoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `funcoesPermissoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_funcao` to the `funcoesPermissoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_permissao` to the `funcoesPermissoes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `localizacoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_corredor` to the `localizacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_prateleira` to the `localizacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_seccao` to the `localizacoes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `permissoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `prateleiras` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `produtos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_categoriaProduto` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `produtosLocalizacoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_localizacao` to the `produtosLocalizacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_produto` to the `produtosLocalizacoes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `seccoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `transacaoes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_caixa` to the `transacaoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cliente` to the `transacaoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_funcionario` to the `transacaoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_produto` to the `transacaoes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `transferencias` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id_funcionario` to the `transferencias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_localizacao` to the `transferencias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_produto` to the `transferencias` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_fornecedorestofuncionarioscaixa` DROP FOREIGN KEY `_fornecedoresTofuncionariosCaixa_A_fkey`;

-- DropForeignKey
ALTER TABLE `_fornecedorestofuncionarioscaixa` DROP FOREIGN KEY `_fornecedoresTofuncionariosCaixa_B_fkey`;

-- DropForeignKey
ALTER TABLE `alertas` DROP FOREIGN KEY `alertas_ID_caixa_fkey`;

-- DropForeignKey
ALTER TABLE `alertas` DROP FOREIGN KEY `alertas_ID_produto_fkey`;

-- DropForeignKey
ALTER TABLE `entradasestoque` DROP FOREIGN KEY `entradasEstoque_ID_fornecedor_fkey`;

-- DropForeignKey
ALTER TABLE `entradasestoque` DROP FOREIGN KEY `entradasEstoque_ID_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `entradasestoque` DROP FOREIGN KEY `entradasEstoque_ID_produto_fkey`;

-- DropForeignKey
ALTER TABLE `funcionarioscaixa` DROP FOREIGN KEY `funcionariosCaixa_ID_caixa_fkey`;

-- DropForeignKey
ALTER TABLE `funcionarioscaixa` DROP FOREIGN KEY `funcionariosCaixa_ID_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `funcionariosfuncoes` DROP FOREIGN KEY `funcionariosFuncoes_ID_funcao_fkey`;

-- DropForeignKey
ALTER TABLE `funcionariosfuncoes` DROP FOREIGN KEY `funcionariosFuncoes_ID_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `funcionariospermissoes` DROP FOREIGN KEY `funcionariosPermissoes_ID_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `funcionariospermissoes` DROP FOREIGN KEY `funcionariosPermissoes_ID_permissao_fkey`;

-- DropForeignKey
ALTER TABLE `funcoespermissoes` DROP FOREIGN KEY `funcoesPermissoes_ID_funcao_fkey`;

-- DropForeignKey
ALTER TABLE `funcoespermissoes` DROP FOREIGN KEY `funcoesPermissoes_ID_permissao_fkey`;

-- DropForeignKey
ALTER TABLE `localizacoes` DROP FOREIGN KEY `localizacoes_ID_corredor_fkey`;

-- DropForeignKey
ALTER TABLE `localizacoes` DROP FOREIGN KEY `localizacoes_ID_prateleira_fkey`;

-- DropForeignKey
ALTER TABLE `localizacoes` DROP FOREIGN KEY `localizacoes_ID_seccao_fkey`;

-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `produtos_ID_categoriaProduto_fkey`;

-- DropForeignKey
ALTER TABLE `produtoslocalizacoes` DROP FOREIGN KEY `produtosLocalizacoes_ID_localizacao_fkey`;

-- DropForeignKey
ALTER TABLE `produtoslocalizacoes` DROP FOREIGN KEY `produtosLocalizacoes_ID_produto_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_ID_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_ID_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `transacaoes` DROP FOREIGN KEY `transacaoes_ID_produto_fkey`;

-- DropForeignKey
ALTER TABLE `transferencias` DROP FOREIGN KEY `transferencias_ID_funcionario_fkey`;

-- DropForeignKey
ALTER TABLE `transferencias` DROP FOREIGN KEY `transferencias_ID_localizacao_fkey`;

-- DropForeignKey
ALTER TABLE `transferencias` DROP FOREIGN KEY `transferencias_ID_produto_fkey`;

-- DropIndex
DROP INDEX `alertas_ID_caixa_fkey` ON `alertas`;

-- DropIndex
DROP INDEX `alertas_ID_produto_fkey` ON `alertas`;

-- DropIndex
DROP INDEX `entradasEstoque_ID_fornecedor_fkey` ON `entradasestoque`;

-- DropIndex
DROP INDEX `entradasEstoque_ID_funcionario_fkey` ON `entradasestoque`;

-- DropIndex
DROP INDEX `entradasEstoque_ID_produto_fkey` ON `entradasestoque`;

-- DropIndex
DROP INDEX `funcionariosCaixa_ID_caixa_fkey` ON `funcionarioscaixa`;

-- DropIndex
DROP INDEX `funcionariosCaixa_ID_funcionario_fkey` ON `funcionarioscaixa`;

-- DropIndex
DROP INDEX `funcionariosFuncoes_ID_funcao_fkey` ON `funcionariosfuncoes`;

-- DropIndex
DROP INDEX `funcionariosFuncoes_ID_funcionario_fkey` ON `funcionariosfuncoes`;

-- DropIndex
DROP INDEX `funcionariosPermissoes_ID_funcionario_fkey` ON `funcionariospermissoes`;

-- DropIndex
DROP INDEX `funcionariosPermissoes_ID_permissao_fkey` ON `funcionariospermissoes`;

-- DropIndex
DROP INDEX `funcoesPermissoes_ID_funcao_fkey` ON `funcoespermissoes`;

-- DropIndex
DROP INDEX `funcoesPermissoes_ID_permissao_fkey` ON `funcoespermissoes`;

-- DropIndex
DROP INDEX `localizacoes_ID_corredor_fkey` ON `localizacoes`;

-- DropIndex
DROP INDEX `localizacoes_ID_prateleira_fkey` ON `localizacoes`;

-- DropIndex
DROP INDEX `localizacoes_ID_seccao_fkey` ON `localizacoes`;

-- DropIndex
DROP INDEX `produtos_ID_categoriaProduto_fkey` ON `produtos`;

-- DropIndex
DROP INDEX `produtosLocalizacoes_ID_localizacao_fkey` ON `produtoslocalizacoes`;

-- DropIndex
DROP INDEX `produtosLocalizacoes_ID_produto_fkey` ON `produtoslocalizacoes`;

-- DropIndex
DROP INDEX `transacaoes_ID_cliente_fkey` ON `transacaoes`;

-- DropIndex
DROP INDEX `transacaoes_ID_funcionario_fkey` ON `transacaoes`;

-- DropIndex
DROP INDEX `transacaoes_ID_produto_fkey` ON `transacaoes`;

-- DropIndex
DROP INDEX `transferencias_ID_funcionario_fkey` ON `transferencias`;

-- DropIndex
DROP INDEX `transferencias_ID_localizacao_fkey` ON `transferencias`;

-- DropIndex
DROP INDEX `transferencias_ID_produto_fkey` ON `transferencias`;

-- AlterTable
ALTER TABLE `alertas` DROP PRIMARY KEY,
    DROP COLUMN `ID_alerta`,
    DROP COLUMN `ID_caixa`,
    DROP COLUMN `ID_produto`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_caixa` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_produto` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `caixas` DROP PRIMARY KEY,
    DROP COLUMN `ID_caixa`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `categoriasprodutos` DROP PRIMARY KEY,
    DROP COLUMN `ID_categoriaProduto`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `clientes` DROP PRIMARY KEY,
    DROP COLUMN `ID_cliente`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    MODIFY `numeroContribuinte` VARCHAR(191) NULL,
    MODIFY `nomeCliente` VARCHAR(191) NULL,
    MODIFY `moradaCliente` VARCHAR(191) NULL,
    MODIFY `telefoneCliente` VARCHAR(191) NULL,
    MODIFY `emailCliente` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `corredores` DROP PRIMARY KEY,
    DROP COLUMN `ID_corredor`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `entradasestoque` DROP PRIMARY KEY,
    DROP COLUMN `ID_entradaEstoque`,
    DROP COLUMN `ID_fornecedor`,
    DROP COLUMN `ID_funcionario`,
    DROP COLUMN `ID_produto`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_fornecedor` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_produto` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `fornecedores` DROP PRIMARY KEY,
    DROP COLUMN `ID_fornecedor`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcionarios` DROP PRIMARY KEY,
    DROP COLUMN `ID_funcionario`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcionarioscaixa` DROP PRIMARY KEY,
    DROP COLUMN `ID_caixa`,
    DROP COLUMN `ID_funcionario`,
    DROP COLUMN `ID_funcionarioCaixa`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_caixa` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcionariosfuncoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_funcao`,
    DROP COLUMN `ID_funcionario`,
    DROP COLUMN `ID_funcionarioFuncao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcao` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcionariospermissoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_funcionario`,
    DROP COLUMN `ID_funcionarioPermissao`,
    DROP COLUMN `ID_permissao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_permissao` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_funcao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcoespermissoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_funcao`,
    DROP COLUMN `ID_funcaoPermissao`,
    DROP COLUMN `ID_permissao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcao` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_permissao` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `localizacoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_corredor`,
    DROP COLUMN `ID_localizacao`,
    DROP COLUMN `ID_prateleira`,
    DROP COLUMN `ID_seccao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_corredor` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_prateleira` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_seccao` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `permissoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_permissao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `prateleiras` DROP PRIMARY KEY,
    DROP COLUMN `ID_prateleira`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `produtos` DROP PRIMARY KEY,
    DROP COLUMN `ID_categoriaProduto`,
    DROP COLUMN `ID_produto`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_categoriaProduto` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `produtoslocalizacoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_localizacao`,
    DROP COLUMN `ID_produto`,
    DROP COLUMN `ID_produtoLocalizacao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_localizacao` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_produto` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `seccoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_seccao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transacaoes` DROP PRIMARY KEY,
    DROP COLUMN `ID_cliente`,
    DROP COLUMN `ID_funcionario`,
    DROP COLUMN `ID_produto`,
    DROP COLUMN `ID_transacao`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_caixa` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_cliente` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_produto` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transferencias` DROP PRIMARY KEY,
    DROP COLUMN `ID_funcionario`,
    DROP COLUMN `ID_localizacao`,
    DROP COLUMN `ID_produto`,
    DROP COLUMN `ID_transferencia`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_localizacao` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_produto` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_id_categoriaProduto_fkey` FOREIGN KEY (`id_categoriaProduto`) REFERENCES `categoriasProdutos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_id_fornecedor_fkey` FOREIGN KEY (`id_fornecedor`) REFERENCES `fornecedores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_id_caixa_fkey` FOREIGN KEY (`id_caixa`) REFERENCES `caixas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_id_seccao_fkey` FOREIGN KEY (`id_seccao`) REFERENCES `seccoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_id_prateleira_fkey` FOREIGN KEY (`id_prateleira`) REFERENCES `prateleiras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_id_corredor_fkey` FOREIGN KEY (`id_corredor`) REFERENCES `corredores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_localizacao_fkey` FOREIGN KEY (`id_localizacao`) REFERENCES `localizacoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transferencias` ADD CONSTRAINT `transferencias_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transferencias` ADD CONSTRAINT `transferencias_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transferencias` ADD CONSTRAINT `transferencias_id_localizacao_fkey` FOREIGN KEY (`id_localizacao`) REFERENCES `localizacoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosCaixa` ADD CONSTRAINT `funcionariosCaixa_id_caixa_fkey` FOREIGN KEY (`id_caixa`) REFERENCES `caixas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosCaixa` ADD CONSTRAINT `funcionariosCaixa_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_id_caixa_fkey` FOREIGN KEY (`id_caixa`) REFERENCES `caixas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosFuncoes` ADD CONSTRAINT `funcionariosFuncoes_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosFuncoes` ADD CONSTRAINT `funcionariosFuncoes_id_funcao_fkey` FOREIGN KEY (`id_funcao`) REFERENCES `funcoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosPermissoes` ADD CONSTRAINT `funcionariosPermissoes_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosPermissoes` ADD CONSTRAINT `funcionariosPermissoes_id_permissao_fkey` FOREIGN KEY (`id_permissao`) REFERENCES `permissoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcoesPermissoes` ADD CONSTRAINT `funcoesPermissoes_id_funcao_fkey` FOREIGN KEY (`id_funcao`) REFERENCES `funcoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcoesPermissoes` ADD CONSTRAINT `funcoesPermissoes_id_permissao_fkey` FOREIGN KEY (`id_permissao`) REFERENCES `permissoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_fornecedoresTofuncionariosCaixa` ADD CONSTRAINT `_fornecedoresTofuncionariosCaixa_A_fkey` FOREIGN KEY (`A`) REFERENCES `fornecedores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_fornecedoresTofuncionariosCaixa` ADD CONSTRAINT `_fornecedoresTofuncionariosCaixa_B_fkey` FOREIGN KEY (`B`) REFERENCES `funcionariosCaixa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
