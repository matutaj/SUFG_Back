import { vendasProdutos } from "@prisma/client";
import { DadosVendaProduto, IVendaProduto } from "../IVendaProduto";
import  prisma  from "../../../../prisma/client";

class VendaProdutoRepositorio implements IVendaProduto {
  async criarVendaProduto({
    id_produto,
    id_venda,
    quantidadeVendida,
  }: DadosVendaProduto): Promise<vendasProdutos> {
    const criarVendaProduto = await prisma.vendasProdutos.create({
      data: { id_produto, id_venda, quantidadeVendida },
    });
    return criarVendaProduto;
  }
  async listarTodasVendasProdutos(): Promise<vendasProdutos[]> {
    const listarTodasVendasProdutos = await prisma.vendasProdutos.findMany();
    return listarTodasVendasProdutos;
  }
  async listarVendaProdutoPorId(
    id: string
  ): Promise<vendasProdutos | undefined> {
    const listarVendaProdutoPorId =
      (await prisma.vendasProdutos.findUnique({ where: { id } })) || undefined;
    return listarVendaProdutoPorId;
  }
  async atualizarVendaProduto({
    id,
    id_produto,
    id_venda,
    quantidadeVendida,
  }: DadosVendaProduto): Promise<vendasProdutos> {
    const atualizarVendaProduto = await prisma.vendasProdutos.update({
      where: { id },
      data: { id_produto, id_venda, quantidadeVendida },
    });
    return atualizarVendaProduto;
  }
  async eliminarVendaProduto(id: string): Promise<vendasProdutos> {
    const eliminarVendaProduto = await prisma.vendasProdutos.delete({
      where: { id },
    });
    return eliminarVendaProduto;
  }
}
export { VendaProdutoRepositorio };
