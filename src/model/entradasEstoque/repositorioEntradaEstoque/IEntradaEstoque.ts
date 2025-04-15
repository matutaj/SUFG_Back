import { entradasEstoque } from "@prisma/client";

export interface DadosEntradaEstoque {
  id?: string;
  id_fornecedor: string;
  id_produto: string;
  id_funcionario: string;
  quantidadeRecebida: number;
  dataEntrada: string | Date;
  adicionado: boolean;
  custoUnitario: number;
  lote: string;
  dataValidadeLote: string | Date;
}
export interface IEntradaEstoque {
  criarEntradaEstoque({}: DadosEntradaEstoque): Promise<entradasEstoque>;
  listarEntraEstoquePeloIdDoProduto(
    id_produto: string
  ): Promise<entradasEstoque | undefined>;
  listarTodasEntradasEstoque(): Promise<entradasEstoque[]>;
  atualizarEntradaEstoque({}: DadosEntradaEstoque): Promise<entradasEstoque>;
  eliminarEntradaEstoque(id: string): Promise<void>;
}
