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
  cliente?: {
    emailCliente: string;
    moradaCliente: string;
    nomeCliente: string;
    numeroContribuinte: string;
    telefoneCliente: string;
  }[];
  vendasProdutos: {
    id_venda: string;
    id_produto: string;
    quantidadeVendida: number;
  }[];
}
export interface IVenda {
  criarVenda({}: DadosVenda): Promise<vendas>;
  listarTodasVendas(): Promise<vendas[]>;
  listarVendaPorId(id: string): Promise<vendas | undefined>;
  atualizarVenda({}: DadosVenda): Promise<vendas>;
  eliminarVenda(id: string): Promise<vendas>;
}
