import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque, IEntradaEstoque } from "../IEntradaEstoque";
import { prisma } from "../../../../prisma/client";

class EntradaEstoqueRepositorio implements IEntradaEstoque {
  async criarEntradaEstoque({
    custoUnitario,
    dataEntrada,
    adicionado.
    quantidadeRecebida,
    id_fornecedor,
    id_produto,
    id_funcionario,
    dataValidadeLote,
    lote,
  }: DadosEntradaEstoque): Promise<entradasEstoque> {
    const criarEntradaEstoque = await prisma.entradasEstoque.create({
      data: {
        custoUnitario,
        dataEntrada,
        quantidadeRecebida,
        adicionado,
        dataValidadeLote,
        lote,
        id_fornecedor,
        id_produto,
        id_funcionario,
      },
    });
    return criarEntradaEstoque;
  }
  async listarTodasEntradasEstoque(): Promise<entradasEstoque[]> {
    const listarTodasEntradasEstoque = await prisma.entradasEstoque.findMany();
    return listarTodasEntradasEstoque;
  }
  async listarEntraEstoquePeloIdDoProduto(
    id_produto: string
  ): Promise<entradasEstoque | undefined> {
    const listarEntraEstoquePeloIdDoProduto =
      (await prisma.entradasEstoque.findFirst({
        where: {
          id_produto,
        },
      })) || undefined;
    return listarEntraEstoquePeloIdDoProduto;
  }
  async atualizarEntradaEstoque({
    custoUnitario,
    dataEntrada,
    adicionado,
    quantidadeRecebida,
    dataValidadeLote,
    lote,
    id,
  }: DadosEntradaEstoque): Promise<entradasEstoque> {
    const atualizarEntrada = await prisma.entradasEstoque.update({
      where: {
        id,
      },
      data: {
        custoUnitario,
        dataEntrada,
        adicionado,
        quantidadeRecebida,
        dataValidadeLote,
        lote,
      },
    });
    return atualizarEntrada;
  }
  async eliminarEntradaEstoque(id: string): Promise<void> {
    await prisma.entradasEstoque.delete({
      where: {
        id,
      },
    });
  }
}
export { EntradaEstoqueRepositorio };
