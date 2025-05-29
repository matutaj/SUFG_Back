import { vendas } from "@prisma/client";

export interface DadosVenda {
  id?: string;
  id_cliente?: string | null;
  id_funcionarioCaixa: string;
  metodoPagamento: string;
  numeroDocumento: string;
  dataEmissao: Date;
  dataValidade: Date;
  valorTotal: number;
}
export interface IVenda {
  criarVenda({}: DadosVenda): Promise<vendas>;
  listarTodasVendas(): Promise<vendas[]>;
  listarVendaPorId(id: string): Promise<vendas | undefined>;
  atualizarVenda({}: DadosVenda): Promise<vendas>;
  eliminarVenda(id: string): Promise<vendas>;
}
