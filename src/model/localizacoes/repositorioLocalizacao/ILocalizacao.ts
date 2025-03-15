import { localizacoes, localProduto} from "@prisma/client"

export interface DadosLocalizacao{
    id?: string
    id_seccao: string
    id_prateleira: string
    id_corredor: string
    nomeLocalizacao: string
    descricaoLocalizacao: string
    localProduto: localProduto
}
export interface ILocalizacao{
    criarLocalizacao({}: DadosLocalizacao): Promise<localizacoes>
    listarTodosLocalizacoes(): Promise<localizacoes[]>
    listarUmLocalizacaoPeloId(id: string): Promise<localizacoes | undefined>
    listarUmLocalizacaoPeloNome(nomeLocalizacao: string): Promise<localizacoes | undefined>
    atualizarLocalizacao({}: DadosLocalizacao): Promise<localizacoes>
    eliminarLocalizacao(id: string): Promise<void>

}