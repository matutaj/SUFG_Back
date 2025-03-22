import { vendas } from "@prisma/client";
import { DadosVenda, IVenda } from "../IVenda";
import { prisma } from "../../../../prisma/client";

class VendaRepositorio implements IVenda {
  async criarVenda({
    dataEmissao,
    numeroDocumento,
    tipoDocumento,
    valorTotal,
    id_cliente,
    dataValidade,
    id_funcionarioCaixa,
    vendasProdutos,
  }: DadosVenda): Promise<vendas> {
    const criarVenda = await prisma.vendas.create({
      data: {
        dataEmissao,
        numeroDocumento,
        tipoDocumento,
        valorTotal,
        dataValidade,
        id_cliente,
        id_funcionarioCaixa,
        vendasProdutos: {
          create: vendasProdutos.map((vendaProduto) => ({
            id_produto: vendaProduto.id_produto,
            quantidadeVendida: vendaProduto.quantidadeVendida,
          })),
        },
      },
      include: { vendasProdutos: true }, // Inclui os produtos criados na resposta
    });
    return criarVenda;
  }

  async listarTodasVendas(): Promise<vendas[]> {
    const listarTodasVendas = await prisma.vendas.findMany({
      include: { vendasProdutos: true },
    });
    return listarTodasVendas;
  }

  async listarVendaPorId(id: string): Promise<vendas | undefined> {
    const listarVendaPorId = await prisma.vendas.findUnique({
      where: { id },
      include: { vendasProdutos: true },
    });
    return listarVendaPorId || undefined;
  }

  async atualizarVenda({
    id,
    dataEmissao,
    dataValidade,
    id_cliente,
    id_funcionarioCaixa,
    numeroDocumento,
    tipoDocumento,
    valorTotal,
    vendasProdutos,
  }: DadosVenda): Promise<vendas> {
    const atualizarVenda = await prisma.vendas.update({
      where: { id },
      data: {
        dataEmissao,
        dataValidade,
        id_cliente,
        id_funcionarioCaixa,
        numeroDocumento,
        tipoDocumento,
        valorTotal,
        vendasProdutos: {
          deleteMany: {}, 
          create: vendasProdutos.map((vendaProduto) => ({
            id_produto: vendaProduto.id_produto,
            quantidadeVendida: vendaProduto.quantidadeVendida,
          })),
        },
      },
      include: { vendasProdutos: true }, 
    });
    return atualizarVenda;
  }

  async eliminarVenda(id: string): Promise<vendas> {
    const eliminarVenda = await prisma.vendas.delete({
      where: { id },
      include: { vendasProdutos: true },
    });
    return eliminarVenda;
  }
}

export { VendaRepositorio };