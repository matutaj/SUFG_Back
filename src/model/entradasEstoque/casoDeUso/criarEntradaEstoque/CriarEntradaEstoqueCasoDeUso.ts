import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque } from "../../repositorioEntradaEstoque/IEntradaEstoque"; 
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque"; 
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto"; 
import { FornecedorRepositorio } from "../../../fornecedores/RepositorioFornecedor/implementacoes/RepositorioFornecedor";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario"; 

class CriarEntradaEstoqueCasoDeUso {
  async execute({
    id_fornecedor,
    id_produto,
    id_funcionario,
    produtoRecebido,
    quantidadeRecebida,
    dataEntrada,
    custoUnitario,
    lote,
    dataValidadeLote,
  }: DadosEntradaEstoque): Promise<entradasEstoque> {
    
    const repositorioEntradaEstoque = new EntradaEstoqueRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioFornecedor = new FornecedorRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();

    
    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id_produto);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    const existeFornecedor = await repositorioFornecedor.listarUmFornecedorPeloId(id_fornecedor);
    if (!existeFornecedor) {
      throw new Error("Não existe um fornecedor com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    const quantidade = parseFloat(quantidadeRecebida); 
    if (isNaN(quantidade) || quantidade <= 0) {
      throw new Error("A quantidade recebida deve ser um número positivo");
    }

    if (custoUnitario <= 0) {
      throw new Error("O custo unitário deve ser um valor positivo");
    }

    const dataAtual = new Date();
    if (new Date(dataValidadeLote) <= dataAtual) {
      throw new Error("A data de validade do lote deve ser futura");
    }

    const result = await repositorioEntradaEstoque.criarEntradaEstoque({
      id_fornecedor,
      id_produto,
      id_funcionario,
      produtoRecebido,
      quantidadeRecebida,
      dataEntrada,
      custoUnitario,
      lote,
      dataValidadeLote,
    });

    return result;
  }
}

export { CriarEntradaEstoqueCasoDeUso };