import { caixas } from "@prisma/client"

export interface DadosCaixa{
    ID_caixa?: string
    nomeCaixa: string
    descricaoCaixa: string
}
export interface ICaixa{
    criarCaixa({}: DadosCaixa): Promise<caixas>
    listarTodosCaixas(): Promise<caixas[]>
    listarUmCaixaPeloNome(nomeCaixa: string): Promise<caixas | undefined>
    listarUmCaixaPeloId(id: string): Promise<caixas | undefined>
    atualizarCaixa({}: DadosCaixa): Promise<caixas>
    eliminarCaixa(id: string): Promise<void>
}