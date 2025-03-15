import { categoriasProdutos } from "@prisma/client";

export interface DadosCategoriaProduto {
    id?: string;
    nomeCategoria: string;
    descricaoCategoria: string;
}
export interface ICategoriaProduto {
    criarCategoriaProduto({}: DadosCategoriaProduto): Promise<categoriasProdutos>;
    listarTodasCategoriasProdutos(): Promise<categoriasProdutos[]>;
    listarUmaCategoriaProdutoPeloId(id: string): Promise<categoriasProdutos | undefined>;
    listarUmaCategoriaProdutoPeloNome(nomeCategoria: string): Promise<categoriasProdutos | undefined>;
    atualizarCategoriaProduto({}: DadosCategoriaProduto): Promise<categoriasProdutos>;
    eliminarCategoriaProduto(id: string): Promise<void>;
}