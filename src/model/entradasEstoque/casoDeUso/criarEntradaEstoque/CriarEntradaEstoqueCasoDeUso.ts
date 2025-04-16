import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque } from "../../repositorioEntradaEstoque/IEntradaEstoque";
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { FornecedorRepositorio } from "../../../fornecedores/repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { parseISO } from "date-fns";

class CriarEntradaEstoqueCasoDeUso {
  async execute({
    id_fornecedor,
    id_produto,
    id_funcionario,
    quantidadeRecebida,
    dataEntrada,
    adicionado,
    custoUnitario,
    lote,
    dataValidadeLote,
  }: DadosEntradaEstoque): Promise<entradasEstoque> {
    const repositorioEntradaEstoque = new EntradaEstoqueRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioFornecedor = new FornecedorRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();

    // Verificar se o produto existe
    const existeProduto = await repositorioProduto.listarUmProdutoPorId(
      id_produto
    );
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    // Verificar se o fornecedor existe
    const existeFornecedor =
      await repositorioFornecedor.listarUmFornecedorPeloId(id_fornecedor);
    if (!existeFornecedor) {
      throw new Error("Não existe um fornecedor com esse id");
    }

    // Verificar se o funcionário existe
    const existeFuncionario =
      await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    // Validar custo unitário
    if (custoUnitario <= 0) {
      throw new Error("O custo unitário deve ser um valor positivo");
    }

    const formatToISO = (dateStr: string): string => {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        throw new Error(`Invalid date format for ${dateStr}`);
      }
      return date.toISOString();
    };

    const formattedDataEntrada = parseISO(`${dataEntrada}`);
    const formattedDataValidadeLote = parseISO(`${dataValidadeLote}`);

    const result = await repositorioEntradaEstoque.criarEntradaEstoque({
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

export { CriarEntradaEstoqueCasoDeUso };
