import { produtos } from "@prisma/client";
import { DadosProduto, IProduto } from "../IProduto";
import { prisma } from "../../../../prisma/client";

class ProdutoRepositorio implements IProduto {
  async criarProduto({
    custoAquisicao,
    nomeProduto,
    precoVenda,
    quantidadeEstoque,
    referenciaProduto,
    id_categoriaProduto,
    codigoBarras,
    unidadeConteudo,
    unidadeMedida,
  }: DadosProduto): Promise<produtos> {
    const criarProduto = await prisma.produtos.create({
      data: {
        custoAquisicao,
        codigoBarras,
        nomeProduto,
        precoVenda,
        quantidadeEstoque,
        referenciaProduto,
        unidadeConteudo,
        unidadeMedida,
        id_categoriaProduto,
      },
    });
    return criarProduto;
  }

  async listarTodosProdutos(): Promise<produtos[]> {
    const todosProdutos = await prisma.produtos.findMany();
    return todosProdutos;
  }

  async listarUmProdutoPorId(id: string): Promise<produtos | undefined> {
    const listarUmProdutoPorId =
      (await prisma.produtos.findUnique({ where: { id } })) || undefined;
    return listarUmProdutoPorId;
  }

  async listarUmProdutoPeloNome(
    nomeProduto: string
  ): Promise<produtos | undefined> {
    const listarUmProdutoPeloNome =
      (await prisma.produtos.findFirst({ where: { nomeProduto } })) ||
      undefined;
    return listarUmProdutoPeloNome;
  }

  async atualizarProduto({
    id,
    custoAquisicao,
    nomeProduto,
    precoVenda,
    quantidadeEstoque,
    referenciaProduto,
    codigoBarras,
    id_categoriaProduto,
    unidadeConteudo,
    unidadeMedida,
  }: DadosProduto): Promise<produtos> {
    const atualizarProduto = await prisma.produtos.update({
      where: { id },
      data: {
        custoAquisicao,
        codigoBarras,
        unidadeConteudo,
        unidadeMedida,
        nomeProduto,
        precoVenda,
        quantidadeEstoque,
        referenciaProduto,
        id_categoriaProduto,
      },
    });
    return atualizarProduto;
  }

  async eliminarProduto(id: string): Promise<void> {
    await prisma.produtos.delete({ where: { id } });
  }
}
export { ProdutoRepositorio };
