import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque } from "../../repositorioEntradaEstoque/IEntradaEstoque";
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";
import { FornecedorRepositorio } from "../../../fornecedores/repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { parseISO } from "date-fns";
class AtualizarEntradaEstoqueCasoDeUso {
  async execute({
    id,
    id_fornecedor,
    id_produto,
    id_funcionario,
    adicionado,
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
      throw new AppError(
        "O ID da entrada de estoque é obrigatório para atualização"
      );
    }

    const existeEntrada =
      await repositorioEntradaEstoque.listarTodasEntradasEstoque();
    const entradaExistente = existeEntrada.find((entrada) => entrada.id === id);
    if (!entradaExistente) {
      throw new AppError("Não existe uma entrada de estoque com esse id");
    }

    const existeFornecedor =
      await repositorioFornecedor.listarUmFornecedorPeloId(id_fornecedor);
    if (!existeFornecedor) {
      throw new AppError("Não existe um fornecedor com esse id");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(
      id_produto
    );
    if (!existeProduto) {
      throw new AppError("Não existe um produto com esse id");
    }

    const existeFuncionario =
      await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }
    const formattedDataEntrada = parseISO(`${dataEntrada}`);
    const formattedDataValidadeLote = parseISO(`${dataValidadeLote}`);

    const result = await repositorioEntradaEstoque.atualizarEntradaEstoque({
      id,
      id_fornecedor,
      id_produto,
      id_funcionario,
      quantidadeRecebida,
      adicionado: adicionado || false,
      custoUnitario,
      lote,
      dataEntrada: formattedDataEntrada,
      dataValidadeLote: formattedDataValidadeLote,
    });

    return result;
  }
}

export { AtualizarEntradaEstoqueCasoDeUso };
