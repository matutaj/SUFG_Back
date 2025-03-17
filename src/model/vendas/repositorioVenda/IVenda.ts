import { vendas, tipoDocumento } from "@prisma/client";

export interface DadosVenda {
  id?: string;
  id_cliente: string;
  id_funcionarioCaixa: string;
  numeroDocumento: string;
  tipoDocumento: tipoDocumento;
  dataEmissao: Date;
  dataValidade: Date;
  valorTotal: number;
  vendasProdutos: {
    id_venda: string;
    id_produto: string;
    quantidadeVendida: number;
  }[];
}
export interface IVenda {
  criarVenda({}: DadosVenda): Promise<vendas>;
  listarTodasVendas(): Promise<vendas[]>;
}
