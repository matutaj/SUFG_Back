import { estoques } from "@prisma/client";
import { DadosEstoque, IEstoque } from "../IEstoque";
import { prisma } from "../../../../prisma/client";

class EstoqueRepositorio implements IEstoque {
  async criarEstoque({
    id_produto,
    quantidadeAtual,
    lote,
    dataValidadeLote,
  }: DadosEstoque): Promise<estoques> {
    const estoque = await prisma.estoques.create({
      data: { id_produto, quantidadeAtual, lote, dataValidadeLote },
    });
    return estoque;
  }

  async listarTodosEstoques(): Promise<estoques[]> {
    const estoques = await prisma.estoques.findMany();
    return estoques;
  }

  async listarUmEstoquePeloId(id: string): Promise<estoques | undefined> {
    const estoque =
      (await prisma.estoques.findUnique({ where: { id } })) || undefined;
    return estoque;
  }

  async listarUmEstoquePeloProduto(
    id_produto: string
  ): Promise<estoques | undefined> {
    const estoque =
      (await prisma.estoques.findFirst({ where: { id_produto } })) || undefined;
    return estoque;
  }

  async atualizarEstoque({
    id,
    id_produto,
    quantidadeAtual,
    lote,
    dataValidadeLote,
  }: DadosEstoque): Promise<estoques> {
    const estoque = await prisma.estoques.update({
      where: { id },
      data: { id_produto, quantidadeAtual, lote, dataValidadeLote },
    });
    return estoque;
  }

  async deleteEstoque(id: string): Promise<void> {
    await prisma.estoques.delete({ where: { id } });
  }
}

export { EstoqueRepositorio };
