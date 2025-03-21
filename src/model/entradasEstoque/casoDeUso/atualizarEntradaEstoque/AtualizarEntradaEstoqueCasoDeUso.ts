import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque } from "../../repositorioEntradaEstoque/IEntradaEstoque";
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque";
import { FornecedorRepositorio } from "../../../fornecedores/RepositorioFornecedor/implementacoes/RepositorioFornecedor";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
class AtualizarEntradaEstoqueCasoDeUso {
  async execute({
    id,
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
    const repositorioFornecedor = new FornecedorRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!id) {
      throw new Error("O ID da entrada de estoque é obrigatório para atualização");
    }

    const existeEntrada = await repositorioEntradaEstoque.listarTodasEntradasEstoque();
    const entradaExistente = existeEntrada.find((entrada) => entrada.id === id);
    if (!entradaExistente) {
      throw new Error("Não existe uma entrada de estoque com esse id");
    }

    const existeFornecedor = await repositorioFornecedor.listarUmFornecedorPeloId(id_fornecedor);
    if (!existeFornecedor) {
      throw new Error("Não existe um fornecedor com esse id");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id_produto);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    const result = await repositorioEntradaEstoque.atualizarEntradaEstoque({
      id,
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

export { AtualizarEntradaEstoqueCasoDeUso };