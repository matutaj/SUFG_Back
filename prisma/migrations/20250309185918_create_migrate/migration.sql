-- CreateTable
CREATE TABLE `clientes` (
    `ID_cliente` VARCHAR(191) NOT NULL,
    `numeroContribuinte` VARCHAR(191) NOT NULL,
    `nomeCliente` VARCHAR(191) NOT NULL,
    `moradaCliente` VARCHAR(191) NOT NULL,
    `telefoneCliente` VARCHAR(191) NOT NULL,
    `emailCliente` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionarios` (
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `numeroBI` VARCHAR(191) NOT NULL,
    `nomeFuncionario` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `moradaFuncionario` VARCHAR(191) NOT NULL,
    `telefoneFuncionario` VARCHAR(191) NOT NULL,
    `emailFuncionario` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_funcionario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoriasProdutos` (
    `ID_categoriaProduto` VARCHAR(191) NOT NULL,
    `nomeCategoria` VARCHAR(191) NOT NULL,
    `descricaoCategoria` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_categoriaProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `ID_produto` VARCHAR(191) NOT NULL,
    `ID_categoriaProduto` VARCHAR(191) NOT NULL,
    `referenciaProduto` VARCHAR(191) NOT NULL,
    `nomeProduto` VARCHAR(191) NOT NULL,
    `custoAquisicao` VARCHAR(191) NOT NULL,
    `precoVenda` DECIMAL(10, 2) NOT NULL,
    `quantidadeEstoque` INTEGER NOT NULL,
    `dataValidade` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fornecedores` (
    `ID_fornecedor` VARCHAR(191) NOT NULL,
    `nif` VARCHAR(191) NOT NULL,
    `nomeFornecedor` VARCHAR(191) NOT NULL,
    `moradaFornecedor` VARCHAR(191) NOT NULL,
    `telefoneFornecedor` INTEGER NOT NULL,
    `emailFornecedor` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_fornecedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradasEstoque` (
    `ID_entradaEstoque` VARCHAR(191) NOT NULL,
    `ID_fornecedor` VARCHAR(191) NOT NULL,
    `ID_produto` VARCHAR(191) NOT NULL,
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `produtoRecebido` VARCHAR(191) NOT NULL,
    `quantidadeRecebida` VARCHAR(191) NOT NULL,
    `dataEntrada` DATETIME(3) NOT NULL,
    `custoUnitario` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_entradaEstoque`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transacaoes` (
    `ID_transacao` VARCHAR(191) NOT NULL,
    `ID_cliente` VARCHAR(191) NOT NULL,
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `ID_produto` VARCHAR(191) NOT NULL,
    `numeroDocumento` VARCHAR(191) NOT NULL,
    `tipoDocumento` ENUM('FATURA', 'RECIBO', 'FATURA_PROFORMA', 'FATURA_RECIBO') NOT NULL,
    `dataEmissao` DATETIME(3) NOT NULL,
    `quantidadeVendida` INTEGER NOT NULL,
    `precoUnitario` DECIMAL(10, 2) NOT NULL,
    `valorTotalTransacao` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_transacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seccoes` (
    `ID_seccao` VARCHAR(191) NOT NULL,
    `nomeSeccao` VARCHAR(191) NOT NULL,
    `descricaoSeccao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_seccao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `corredores` (
    `ID_corredor` VARCHAR(191) NOT NULL,
    `nomeCorredor` VARCHAR(191) NOT NULL,
    `descricaoCorredor` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_corredor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prateleiras` (
    `ID_prateleira` VARCHAR(191) NOT NULL,
    `nomePrateleira` VARCHAR(191) NOT NULL,
    `descricaoPrateleira` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_prateleira`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `localizacoes` (
    `ID_localizacao` VARCHAR(191) NOT NULL,
    `ID_seccao` VARCHAR(191) NOT NULL,
    `ID_prateleira` VARCHAR(191) NOT NULL,
    `ID_corredor` VARCHAR(191) NOT NULL,
    `nomeLocalizacao` VARCHAR(191) NOT NULL,
    `descricaoLocalizacao` VARCHAR(191) NOT NULL,
    `localProduto` ENUM('ARMAZÉM', 'LOJA') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_localizacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtosLocalizacoes` (
    `ID_produtoLocalizacao` VARCHAR(191) NOT NULL,
    `ID_produto` VARCHAR(191) NOT NULL,
    `ID_localizacao` VARCHAR(191) NOT NULL,
    `quantidadeProduto` INTEGER NOT NULL,
    `quantidadeMinimaProduto` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_produtoLocalizacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transferencias` (
    `ID_transferencia` VARCHAR(191) NOT NULL,
    `ID_produto` VARCHAR(191) NOT NULL,
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `ID_localizacao` VARCHAR(191) NOT NULL,
    `dataTransferencia` DATETIME(3) NOT NULL,
    `quantidadeTransferida` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_transferencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caixas` (
    `ID_caixa` VARCHAR(191) NOT NULL,
    `nomeCaixa` VARCHAR(191) NOT NULL,
    `descricaoCaixa` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_caixa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosCaixa` (
    `ID_funcionarioCaixa` VARCHAR(191) NOT NULL,
    `ID_caixa` VARCHAR(191) NOT NULL,
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `estadoCaixa` ENUM('ABERTO', 'FECHADO') NOT NULL,
    `quantidadaFaturada` DECIMAL(10, 2) NOT NULL,
    `horarioAbertura` DATETIME(3) NOT NULL,
    `horarioFechamento` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_funcionarioCaixa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alertas` (
    `ID_alerta` VARCHAR(191) NOT NULL,
    `ID_caixa` VARCHAR(191) NOT NULL,
    `ID_produto` VARCHAR(191) NOT NULL,
    `nomeAlerta` VARCHAR(191) NOT NULL,
    `descricaoAlerta` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_alerta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcoes` (
    `ID_funcao` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_funcao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissoes` (
    `ID_permissao` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_permissao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosFuncoes` (
    `ID_funcionarioFuncao` VARCHAR(191) NOT NULL,
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `ID_funcao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_funcionarioFuncao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionariosPermissoes` (
    `ID_funcionarioPermissao` VARCHAR(191) NOT NULL,
    `ID_funcionario` VARCHAR(191) NOT NULL,
    `ID_permissao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_funcionarioPermissao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcoesPermissoes` (
    `ID_funcaoPermissao` VARCHAR(191) NOT NULL,
    `ID_funcao` VARCHAR(191) NOT NULL,
    `ID_permissao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_funcaoPermissao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_fornecedoresTofuncionariosCaixa` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_fornecedoresTofuncionariosCaixa_AB_unique`(`A`, `B`),
    INDEX `_fornecedoresTofuncionariosCaixa_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_ID_categoriaProduto_fkey` FOREIGN KEY (`ID_categoriaProduto`) REFERENCES `categoriasProdutos`(`ID_categoriaProduto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_ID_fornecedor_fkey` FOREIGN KEY (`ID_fornecedor`) REFERENCES `fornecedores`(`ID_fornecedor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_ID_produto_fkey` FOREIGN KEY (`ID_produto`) REFERENCES `produtos`(`ID_produto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entradasEstoque` ADD CONSTRAINT `entradasEstoque_ID_funcionario_fkey` FOREIGN KEY (`ID_funcionario`) REFERENCES `funcionarios`(`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_ID_produto_fkey` FOREIGN KEY (`ID_produto`) REFERENCES `produtos`(`ID_produto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_ID_cliente_fkey` FOREIGN KEY (`ID_cliente`) REFERENCES `clientes`(`ID_cliente`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacaoes` ADD CONSTRAINT `transacaoes_ID_funcionario_fkey` FOREIGN KEY (`ID_funcionario`) REFERENCES `funcionarios`(`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_ID_seccao_fkey` FOREIGN KEY (`ID_seccao`) REFERENCES `seccoes`(`ID_seccao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_ID_prateleira_fkey` FOREIGN KEY (`ID_prateleira`) REFERENCES `prateleiras`(`ID_prateleira`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_ID_corredor_fkey` FOREIGN KEY (`ID_corredor`) REFERENCES `corredores`(`ID_corredor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_ID_produto_fkey` FOREIGN KEY (`ID_produto`) REFERENCES `produtos`(`ID_produto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosLocalizacoes` ADD CONSTRAINT `produtosLocalizacoes_ID_localizacao_fkey` FOREIGN KEY (`ID_localizacao`) REFERENCES `localizacoes`(`ID_localizacao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transferencias` ADD CONSTRAINT `transferencias_ID_funcionario_fkey` FOREIGN KEY (`ID_funcionario`) REFERENCES `funcionarios`(`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transferencias` ADD CONSTRAINT `transferencias_ID_produto_fkey` FOREIGN KEY (`ID_produto`) REFERENCES `produtos`(`ID_produto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transferencias` ADD CONSTRAINT `transferencias_ID_localizacao_fkey` FOREIGN KEY (`ID_localizacao`) REFERENCES `localizacoes`(`ID_localizacao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosCaixa` ADD CONSTRAINT `funcionariosCaixa_ID_caixa_fkey` FOREIGN KEY (`ID_caixa`) REFERENCES `caixas`(`ID_caixa`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosCaixa` ADD CONSTRAINT `funcionariosCaixa_ID_funcionario_fkey` FOREIGN KEY (`ID_funcionario`) REFERENCES `funcionarios`(`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_ID_caixa_fkey` FOREIGN KEY (`ID_caixa`) REFERENCES `caixas`(`ID_caixa`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_ID_produto_fkey` FOREIGN KEY (`ID_produto`) REFERENCES `produtos`(`ID_produto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosFuncoes` ADD CONSTRAINT `funcionariosFuncoes_ID_funcionario_fkey` FOREIGN KEY (`ID_funcionario`) REFERENCES `funcionarios`(`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosFuncoes` ADD CONSTRAINT `funcionariosFuncoes_ID_funcao_fkey` FOREIGN KEY (`ID_funcao`) REFERENCES `funcoes`(`ID_funcao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosPermissoes` ADD CONSTRAINT `funcionariosPermissoes_ID_funcionario_fkey` FOREIGN KEY (`ID_funcionario`) REFERENCES `funcionarios`(`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionariosPermissoes` ADD CONSTRAINT `funcionariosPermissoes_ID_permissao_fkey` FOREIGN KEY (`ID_permissao`) REFERENCES `permissoes`(`ID_permissao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcoesPermissoes` ADD CONSTRAINT `funcoesPermissoes_ID_funcao_fkey` FOREIGN KEY (`ID_funcao`) REFERENCES `funcoes`(`ID_funcao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcoesPermissoes` ADD CONSTRAINT `funcoesPermissoes_ID_permissao_fkey` FOREIGN KEY (`ID_permissao`) REFERENCES `permissoes`(`ID_permissao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_fornecedoresTofuncionariosCaixa` ADD CONSTRAINT `_fornecedoresTofuncionariosCaixa_A_fkey` FOREIGN KEY (`A`) REFERENCES `fornecedores`(`ID_fornecedor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_fornecedoresTofuncionariosCaixa` ADD CONSTRAINT `_fornecedoresTofuncionariosCaixa_B_fkey` FOREIGN KEY (`B`) REFERENCES `funcionariosCaixa`(`ID_funcionarioCaixa`) ON DELETE CASCADE ON UPDATE CASCADE;
