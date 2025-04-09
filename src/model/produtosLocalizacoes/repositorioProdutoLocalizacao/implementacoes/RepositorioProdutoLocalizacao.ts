import { produtosLocalizacoes } from "@prisma/client";
import {
  DadosProdutoLocalizacao,
  IProdutoLocalizacao,
} from "../IProdutoLocalizacao";
import { prisma } from "../../../../prisma/client";

class ProdutoLocalizacaoRepositorio implements IProdutoLocalizacao {
  async criarProdutoLocalizacao({
    id_produto,
    id_localizacao,
    quantidadeProduto,
    quantidadeMinimaProduto,
    id_corredor,
    id_prateleira,
    id_seccao,
  }: DadosProdutoLocalizacao): Promise<produtosLocalizacoes> {
    const criarProdutoLocalizacao = await prisma.produtosLocalizacoes.create({
      data: {
        id_produto,
        id_localizacao,
        quantidadeProduto,
        quantidadeMinimaProduto,
        id_corredor,
        id_prateleira,
        id_seccao,
      },
    });
    return criarProdutoLocalizacao;
  }
  async listarTodosProdutosLocalizacoes(): Promise<produtosLocalizacoes[]> {
    const listarTodosProdutosLocalizacoes =
      await prisma.produtosLocalizacoes.findMany();
    return listarTodosProdutosLocalizacoes;
  }
  async listarUmProdutoLocalizacaoPorId(
    id: string
  ): Promise<produtosLocalizacoes | undefined> {
    const listarUmProdutoLocalizacaoPorId =
      (await prisma.produtosLocalizacoes.findUnique({ where: { id } })) ||
      undefined;
    return listarUmProdutoLocalizacaoPorId;
  }
  async atualizarProdutoLocalizacao({
    id,
    id_produto,
    id_localizacao,
    quantidadeProduto,
    quantidadeMinimaProduto,
    id_corredor,
    id_prateleira,
    id_seccao,
  }: DadosProdutoLocalizacao): Promise<produtosLocalizacoes> {
    const atualizarProdutoLocalizacao =
      await prisma.produtosLocalizacoes.update({
        where: { id },
        data: {
          id_produto,
          id_localizacao,
          quantidadeProduto,
          quantidadeMinimaProduto,
          id_corredor,
          id_prateleira,
          id_seccao,
        },
      });
    return atualizarProdutoLocalizacao;
  }
  async eliminarProdutoLocalizacao(id: string): Promise<void> {
    await prisma.produtosLocalizacoes.delete({ where: { id } });
  }
}
export { ProdutoLocalizacaoRepositorio };
