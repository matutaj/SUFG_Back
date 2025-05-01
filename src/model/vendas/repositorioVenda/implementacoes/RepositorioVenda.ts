import { vendas } from "@prisma/client";
import { DadosVenda, IVenda } from "../IVenda";
import { prisma } from "../../../../prisma/client";

class VendaRepositorio implements IVenda {
  async criarVenda({
    dataEmissao,
    numeroDocumento,
    valorTotal,
    id_cliente,
    dataValidade,
    id_funcionarioCaixa,
  }: DadosVenda): Promise<vendas> {
    const criarVenda = await prisma.vendas.create({
      data: {
        dataEmissao,
        numeroDocumento,
        valorTotal,
        dataValidade,
        id_cliente,
        id_funcionarioCaixa,
       
      },
    
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
    valorTotal,
  }: DadosVenda): Promise<vendas> {
    const atualizarVenda = await prisma.vendas.update({
      where: { id },
      data: {
        dataEmissao,
        dataValidade,
        id_cliente,
        id_funcionarioCaixa,
        numeroDocumento,
        valorTotal,
       
      },
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