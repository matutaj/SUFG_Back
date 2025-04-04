import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque, IEntradaEstoque } from "../IEntradaEstoque";
import { prisma } from "../../../../prisma/client";

class EntradaEstoqueRepositorio implements IEntradaEstoque {
  async criarEntradaEstoque({
    custoUnitario,
    dataEntrada,
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
  async atualizarEntradaEstoque({
    custoUnitario,
    dataEntrada,
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
