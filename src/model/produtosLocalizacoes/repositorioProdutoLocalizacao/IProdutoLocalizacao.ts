import { produtosLocalizacoes } from "@prisma/client";

export interface DadosProdutoLocalizacao {
    id?: string
    id_seccao: string
    id_prateleira: string
    id_corredor: string
	id_produto: string
    id_localizacao: string
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