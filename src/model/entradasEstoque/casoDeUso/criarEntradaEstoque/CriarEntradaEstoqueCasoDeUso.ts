import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque } from "../../repositorioEntradaEstoque/IEntradaEstoque";
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { FornecedorRepositorio } from "../../../fornecedores/repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";

class CriarEntradaEstoqueCasoDeUso {
  async execute({
    id_fornecedor,
    id_produto,
    id_funcionario,
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

    // Verificar se o produto existe
    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id_produto);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    // Verificar se o fornecedor existe
    const existeFornecedor = await repositorioFornecedor.listarUmFornecedorPeloId(id_fornecedor);
    if (!existeFornecedor) {
      throw new Error("Não existe um fornecedor com esse id");
    }

    // Verificar se o funcionário existe
    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    // Validar quantidade recebida
    const quantidade = parseFloat(quantidadeRecebida);
    if (isNaN(quantidade) || quantidade <= 0) {
      throw new Error("A quantidade recebida deve ser um número positivo");
    }

    // Validar custo unitário
    if (custoUnitario <= 0) {
      throw new Error("O custo unitário deve ser um valor positivo");
    }

    // Validar data de validade do lote (garantir que seja futura)
    const dataAtual = new Date();
    const dataValidade = new Date(dataValidadeLote);
    if (dataValidade <= dataAtual) {
      throw new Error("A data de validade do lote deve ser futura");
    }

    // Converter dataEntrada para o formato ISO-8601
    let dataEntradaFormatada: string;
    try {
      // Tenta parsear a dataEntrada como string ou Date
      if (typeof dataEntrada === "string") {
        // Se já for uma string, tenta convertê-la para Date e depois para ISO
        const data = new Date(dataEntrada);
        if (isNaN(data.getTime())) {
          throw new Error("Data de entrada inválida");
        }
        dataEntradaFormatada = data.toISOString(); // Converte para "2025-04-04T00:00:00.000Z"
      } else if (dataEntrada instanceof Date) {
        dataEntradaFormatada = dataEntrada.toISOString();
      } else {
        throw new Error("Formato de data de entrada inválido");
      }
    } catch (error) {
      throw new Error("Erro ao processar a data de entrada: " + (error as Error).message);
    }

    // Converter dataValidadeLote para ISO-8601 (se ainda não estiver)
    const dataValidadeLoteFormatada = new Date(dataValidadeLote).toISOString();

    // Chamar o repositório para criar a entrada de estoque
    const result = await repositorioEntradaEstoque.criarEntradaEstoque({
      id_fornecedor,
      id_produto,
      id_funcionario,
      quantidadeRecebida, 
      dataEntrada: dataEntradaFormatada,
      custoUnitario,
      lote,
      dataValidadeLote: dataValidadeLoteFormatada,
    });

    return result;
  }
}

export { CriarEntradaEstoqueCasoDeUso };