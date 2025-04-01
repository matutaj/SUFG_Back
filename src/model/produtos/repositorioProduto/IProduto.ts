import { produtos } from "@prisma/client";

export interface DadosProduto {
  id?: string;
  id_categoriaProduto: string;
  referenciaProduto: string;
  nomeProduto: string;
  custoAquisicao: string;
  precoVenda: number;
  quantidadeEstoque: number;
  unidadeMedida: string;
  codigoBarras: string;
  unidadeConteudo: string;
}

export interface IProduto {
  criarProduto({}: DadosProduto): Promise<produtos>;
  listarTodosProdutos(): Promise<produtos[]>;
  listarUmProdutoPorId(ID_produto: string): Promise<produtos | undefined>;
  listarUmProdutoPeloCodigoBarras(
    codigoBarras: string
  ): Promise<produtos | undefined>;
  listarUmProdutoPeloNome(nomeProduto: string): Promise<produtos | undefined>;
  atualizarProduto({}: DadosProduto): Promise<produtos>;
  eliminarProduto(ID_produto: string): Promise<void>;
}
