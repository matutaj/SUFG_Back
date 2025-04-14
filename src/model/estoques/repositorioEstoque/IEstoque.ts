import { estoques } from "@prisma/client";

export interface DadosEstoque {
  id?: string;
  id_produto: string;
  quantidadeAtual: number;
  lote: string;
  dataValidadeLote: Date;
}

export interface IEstoque {
  listarTodosEstoques(): Promise<estoques[]>;
  listarUmEstoquePeloId(id: string): Promise<estoques | undefined>;
  listarUmEstoquePeloProduto(id_produto: string): Promise<estoques | undefined>;
  criarEstoque({}: DadosEstoque): Promise<estoques>;
  atualizarEstoque({}: DadosEstoque): Promise<estoques>;
  deleteEstoque(id: string): Promise<void>;
}
