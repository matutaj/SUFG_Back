-- CreateTable
CREATE TABLE `clientes` (
    `id` VARCHAR(191) NOT NULL,
    `numeroContribuinte` VARCHAR(191) NULL,
    `nomeCliente` VARCHAR(191) NULL,
    `moradaCliente` VARCHAR(191) NULL,
    `telefoneCliente` VARCHAR(191) NULL,
    `emailCliente` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionarios` (
    `id` VARCHAR(191) NOT NULL,
    `numeroBI` VARCHAR(191) NOT NULL,
    `nomeFuncionario` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `moradaFuncionario` VARCHAR(191) NOT NULL,
    `telefoneFuncionario` VARCHAR(191) NOT NULL,
    `emailFuncionario` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarefas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
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

-- CreateTable
CREATE TABLE `categoriasProdutos` (
    `id` VARCHAR(191) NOT NULL,
    `nomeCategoria` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` VARCHAR(191) NOT NULL,
    `id_categoriaProduto` VARCHAR(191) NOT NULL,
    `referenciaProduto` VARCHAR(191) NOT NULL,
    `nomeProduto` VARCHAR(191) NOT NULL,
    `precoVenda` DECIMAL(10, 2) NOT NULL,
    `quantidadePorUnidade` INTEGER NOT NULL,
    `unidadeMedida` VARCHAR(191) NULL,
    `unidadeConteudo` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estoques` (
    `id` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `quantidadeAtual` INTEGER NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `dataValidadeLote` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fornecedores` (
    `id` VARCHAR(191) NOT NULL,
    `nif` VARCHAR(191) NOT NULL,
    `nomeFornecedor` VARCHAR(191) NOT NULL,
    `moradaFornecedor` VARCHAR(191) NOT NULL,
    `telefoneFornecedor` INTEGER NOT NULL,
    `emailFornecedor` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradasEstoque` (
    `id` VARCHAR(191) NOT NULL,
    `id_fornecedor` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `id_funcionario` VARCHAR(191) NOT NULL,
    `quantidadeRecebida` INTEGER NOT NULL,
    `dataEntrada` DATETIME(3) NOT NULL,
    `custoUnitario` DECIMAL(10, 2) NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `dataValidadeLote` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caixas` (
    `id` VARCHAR(191) NOT NULL,
    `nomeCaixa` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendas` (
    `id` VARCHAR(191) NOT NULL,
    `id_cliente` VARCHAR(191) NOT NULL,
    `id_funcionarioCaixa` VARCHAR(191) NOT NULL,
    `numeroDocumento` VARCHAR(191) NOT NULL,
    `dataEmissao` DATETIME(3) NOT NULL,
    `dataValidade` DATETIME(3) NOT NULL,
    `valorTotal` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendasProdutos` (
    `id` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `id_venda` VARCHAR(191) NOT NULL,
    `quantidadeVendida` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seccoes` (
    `id` VARCHAR(191) NOT NULL,
    `nomeSeccao` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `corredores` (
    `id` VARCHAR(191) NOT NULL,
    `nomeCorredor` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prateleiras` (
    `id` VARCHAR(191) NOT NULL,
    `nomePrateleira` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `localizacoes` (
    `id` VARCHAR(191) NOT NULL,
    `nomeLocalizacao` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtosLocalizacoes` (
    `id` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `id_localizacao` VARCHAR(191) NOT NULL,
    `id_seccao` VARCHAR(191) NOT NULL,
    `id_prateleira` VARCHAR(191) NOT NULL,
    `id_corredor` VARCHAR(191) NOT NULL,
    `quantidadeProduto` INTEGER NOT NULL,
    `quantidadeMinimaProduto` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transferencias` (
    `id` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `id_funcionario` VARCHAR(191) NOT NULL,
    `id_localizacao` VARCHAR(191) NOT NULL,
    `dataTransferencia` DATETIME(3) NOT NULL,
    `quantidadeTransferida` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosCaixa` (
    `id` VARCHAR(191) NOT NULL,
    `id_caixa` VARCHAR(191) NOT NULL,
    `id_funcionario` VARCHAR(191) NOT NULL,
    `estadoCaixa` BOOLEAN NOT NULL,
    `quantidadaFaturada` DECIMAL(10, 2) NOT NULL,
    `horarioAbertura` DATETIME(3) NOT NULL,
    `horarioFechamento` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alertas` (
    `id` VARCHAR(191) NOT NULL,
    `id_caixa` VARCHAR(191) NOT NULL,
    `id_produto` VARCHAR(191) NOT NULL,
    `nomeAlerta` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcoes` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissoes` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosFuncoes` (
    `id` VARCHAR(191) NOT NULL,
    `id_funcionario` VARCHAR(191) NOT NULL,
    `id_funcao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosPermissoes` (
    `id` VARCHAR(191) NOT NULL,
    `id_funcionario` VARCHAR(191) NOT NULL,
    `id_permissao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcoesPermissoes` (
    `id` VARCHAR(191) NOT NULL,
    `id_funcao` VARCHAR(191) NOT NULL,
    `id_permissao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_fornecedoresTofuncionariosCaixa` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_fornecedoresTofuncionariosCaixa_AB_unique`(`A`, `B`),
    INDEX `_fornecedoresTofuncionariosCaixa_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `funcionariosTarefas` ADD CONSTRAINT `funcionariosTarefas_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosTarefas` ADD CONSTRAINT `funcionariosTarefas_id_tarefa_fkey` FOREIGN KEY (`id_tarefa`) REFERENCES `tarefas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_id_categoriaProduto_fkey` FOREIGN KEY (`id_categoriaProduto`) REFERENCES `categoriasProdutos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoques` ADD CONSTRAINT `estoques_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_id_fornecedor_fkey` FOREIGN KEY (`id_fornecedor`) REFERENCES `fornecedores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_id_funcionario_fkey` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_funcionarioCaixa_fkey` FOREIGN KEY (`id_funcionarioCaixa`) REFERENCES `funcionariosCaixa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendasProdutos` ADD CONSTRAINT `vendasProdutos_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendasProdutos` ADD CONSTRAINT `vendasProdutos_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `vendas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_localizacao_fkey` FOREIGN KEY (`id_localizacao`) REFERENCES `localizacoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_seccao_fkey` FOREIGN KEY (`id_seccao`) REFERENCES `seccoes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_prateleira_fkey` FOREIGN KEY (`id_prateleira`) REFERENCES `prateleiras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_id_corredor_fkey` FOREIGN KEY (`id_corredor`) REFERENCES `corredores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
