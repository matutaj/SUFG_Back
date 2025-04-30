-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "numeroContribuinte" TEXT,
    "nomeCliente" TEXT,
    "moradaCliente" TEXT,
    "telefoneCliente" TEXT,
    "emailCliente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "id" TEXT NOT NULL,
    "numeroBI" TEXT NOT NULL,
    "nomeFuncionario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "moradaFuncionario" TEXT NOT NULL,
    "telefoneFuncionario" TEXT NOT NULL,
    "emailFuncionario" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarefas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionariosTarefas" (
    "id" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_tarefa" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionariosTarefas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoriasProdutos" (
    "id" TEXT NOT NULL,
    "nomeCategoria" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categoriasProdutos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "id_categoriaProduto" TEXT NOT NULL,
    "referenciaProduto" TEXT NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "precoVenda" DECIMAL(10,2) NOT NULL,
    "quantidadePorUnidade" INTEGER NOT NULL,
    "unidadeMedida" TEXT,
    "unidadeConteudo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoques" (
    "id" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "quantidadeAtual" INTEGER NOT NULL,
    "lote" TEXT NOT NULL,
    "dataValidadeLote" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estoques_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedores" (
    "id" TEXT NOT NULL,
    "nif" TEXT NOT NULL,
    "nomeFornecedor" TEXT NOT NULL,
    "moradaFornecedor" TEXT NOT NULL,
    "telefoneFornecedor" INTEGER NOT NULL,
    "emailFornecedor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fornecedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "codigoRecuperacao" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "codigoRecuperacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entradasEstoque" (
    "id" TEXT NOT NULL,
    "id_fornecedor" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "adicionado" BOOLEAN NOT NULL,
    "quantidadeRecebida" INTEGER NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "custoUnitario" DECIMAL(10,2) NOT NULL,
    "lote" TEXT NOT NULL,
    "dataValidadeLote" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entradasEstoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caixas" (
    "id" TEXT NOT NULL,
    "nomeCaixa" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "caixas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendas" (
    "id" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "id_funcionarioCaixa" TEXT NOT NULL,
    "numeroDocumento" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "valorTotal" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendasProdutos" (
    "id" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "id_venda" TEXT NOT NULL,
    "quantidadeVendida" INTEGER NOT NULL,

    CONSTRAINT "vendasProdutos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seccoes" (
    "id" TEXT NOT NULL,
    "nomeSeccao" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seccoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "corredores" (
    "id" TEXT NOT NULL,
    "nomeCorredor" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "corredores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prateleiras" (
    "id" TEXT NOT NULL,
    "nomePrateleira" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prateleiras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "localizacoes" (
    "id" TEXT NOT NULL,
    "nomeLocalizacao" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "localizacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtosLocalizacoes" (
    "id" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "id_localizacao" TEXT NOT NULL,
    "id_seccao" TEXT NOT NULL,
    "id_prateleira" TEXT NOT NULL,
    "id_corredor" TEXT NOT NULL,
    "quantidadeProduto" INTEGER NOT NULL,
    "quantidadeMinimaProduto" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtosLocalizacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transferencias" (
    "id" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_localizacao" TEXT NOT NULL,
    "dataTransferencia" TIMESTAMP(3) NOT NULL,
    "quantidadeTransferida" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transferencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionariosCaixa" (
    "id" TEXT NOT NULL,
    "id_caixa" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "estadoCaixa" BOOLEAN NOT NULL,
    "quantidadaFaturada" DECIMAL(10,2) NOT NULL,
    "horarioAbertura" TIMESTAMP(3) NOT NULL,
    "horarioFechamento" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionariosCaixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alertas" (
    "id" TEXT NOT NULL,
    "id_caixa" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "nomeAlerta" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alertas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcoes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissoes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionariosFuncoes" (
    "id" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_funcao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionariosFuncoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionariosPermissoes" (
    "id" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_permissao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionariosPermissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcoesPermissoes" (
    "id" TEXT NOT NULL,
    "id_funcao" TEXT NOT NULL,
    "id_permissao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcoesPermissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_fornecedoresTofuncionariosCaixa" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_fornecedoresTofuncionariosCaixa_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_fornecedoresTofuncionariosCaixa_B_index" ON "_fornecedoresTofuncionariosCaixa"("B");

-- AddForeignKey
ALTER TABLE "funcionariosTarefas" ADD CONSTRAINT "funcionariosTarefas_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosTarefas" ADD CONSTRAINT "funcionariosTarefas_id_tarefa_fkey" FOREIGN KEY ("id_tarefa") REFERENCES "tarefas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_id_categoriaProduto_fkey" FOREIGN KEY ("id_categoriaProduto") REFERENCES "categoriasProdutos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoques" ADD CONSTRAINT "estoques_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "codigoRecuperacao" ADD CONSTRAINT "codigoRecuperacao_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradasEstoque" ADD CONSTRAINT "entradasEstoque_id_fornecedor_fkey" FOREIGN KEY ("id_fornecedor") REFERENCES "fornecedores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradasEstoque" ADD CONSTRAINT "entradasEstoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradasEstoque" ADD CONSTRAINT "entradasEstoque_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_id_funcionarioCaixa_fkey" FOREIGN KEY ("id_funcionarioCaixa") REFERENCES "funcionariosCaixa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendasProdutos" ADD CONSTRAINT "vendasProdutos_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendasProdutos" ADD CONSTRAINT "vendasProdutos_id_venda_fkey" FOREIGN KEY ("id_venda") REFERENCES "vendas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtosLocalizacoes" ADD CONSTRAINT "produtosLocalizacoes_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtosLocalizacoes" ADD CONSTRAINT "produtosLocalizacoes_id_localizacao_fkey" FOREIGN KEY ("id_localizacao") REFERENCES "localizacoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtosLocalizacoes" ADD CONSTRAINT "produtosLocalizacoes_id_seccao_fkey" FOREIGN KEY ("id_seccao") REFERENCES "seccoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtosLocalizacoes" ADD CONSTRAINT "produtosLocalizacoes_id_prateleira_fkey" FOREIGN KEY ("id_prateleira") REFERENCES "prateleiras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtosLocalizacoes" ADD CONSTRAINT "produtosLocalizacoes_id_corredor_fkey" FOREIGN KEY ("id_corredor") REFERENCES "corredores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferencias" ADD CONSTRAINT "transferencias_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferencias" ADD CONSTRAINT "transferencias_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferencias" ADD CONSTRAINT "transferencias_id_localizacao_fkey" FOREIGN KEY ("id_localizacao") REFERENCES "localizacoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosCaixa" ADD CONSTRAINT "funcionariosCaixa_id_caixa_fkey" FOREIGN KEY ("id_caixa") REFERENCES "caixas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosCaixa" ADD CONSTRAINT "funcionariosCaixa_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_caixa_fkey" FOREIGN KEY ("id_caixa") REFERENCES "caixas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosFuncoes" ADD CONSTRAINT "funcionariosFuncoes_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosFuncoes" ADD CONSTRAINT "funcionariosFuncoes_id_funcao_fkey" FOREIGN KEY ("id_funcao") REFERENCES "funcoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosPermissoes" ADD CONSTRAINT "funcionariosPermissoes_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariosPermissoes" ADD CONSTRAINT "funcionariosPermissoes_id_permissao_fkey" FOREIGN KEY ("id_permissao") REFERENCES "permissoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcoesPermissoes" ADD CONSTRAINT "funcoesPermissoes_id_funcao_fkey" FOREIGN KEY ("id_funcao") REFERENCES "funcoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcoesPermissoes" ADD CONSTRAINT "funcoesPermissoes_id_permissao_fkey" FOREIGN KEY ("id_permissao") REFERENCES "permissoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_fornecedoresTofuncionariosCaixa" ADD CONSTRAINT "_fornecedoresTofuncionariosCaixa_A_fkey" FOREIGN KEY ("A") REFERENCES "fornecedores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_fornecedoresTofuncionariosCaixa" ADD CONSTRAINT "_fornecedoresTofuncionariosCaixa_B_fkey" FOREIGN KEY ("B") REFERENCES "funcionariosCaixa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
