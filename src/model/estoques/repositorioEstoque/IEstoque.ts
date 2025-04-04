import { estoques } from "@prisma/client";

export interface DadosEstoque {
  id?: string;
  id_produto: string;
  quantidadeAtual: string;
  lote: string;
  dataValidadeLote: Date;
}

export interface IEstoque {
  listarTodosEstoques(): Promise<estoques[]>;
  listarUmEstoquePeloId(id: string): Promise<estoques | undefined>;
  listarUmEstoquePeloLote(lote: string): Promise<estoques | undefined>;
  criarEstoque({}: DadosEstoque): Promise<estoques>;
  atualizarEstoque({}: DadosEstoque): Promise<estoques>;
  deleteEstoque(id: string): Promise<void>;
}