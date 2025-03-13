import { produtosLocalizacoes } from "@prisma/client";

export interface DadosProdutoLocalizacao {
    ID_produtoLocalizacao: string
	ID_produto: string
    ID_localizacao: string
    quantidadeProduto: number
    quantidadeMinimaProduto: number
}
export interface IProdutoLocalizacao {
    criarProdutoLocalizacao({}: DadosProdutoLocalizacao): Promise<produtosLocalizacoes>
    listarTodosProdutosLocalizacoes(): Promise<produtosLocalizacoes[]>
    listarUmProdutoLocalizacaoPorId(ID_produtoLocalizacao: string): Promise<produtosLocalizacoes | undefined>
    atualizarProdutoLocalizacao({}: DadosProdutoLocalizacao): Promise<produtosLocalizacoes>
    eliminarProdutoLocalizacao(ID_produtoLocalizacao: string): Promise<void>

}