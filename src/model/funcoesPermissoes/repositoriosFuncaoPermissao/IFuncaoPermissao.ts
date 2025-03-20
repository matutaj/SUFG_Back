import { funcoesPermissoes } from "@prisma/client";

export interface DadosFuncaoPermissao{
    id?: string
    id_funcao: string
    id_permissao: string
}

export interface IFuncaoPermissao{
    criarFuncaoPermissao({}: DadosFuncaoPermissao): Promise<funcoesPermissoes>
    listarTodasFuncoesPermissoes(): Promise<funcoesPermissoes[]>
    listarUmaFuncaoPermissaoPeloId({id_funcao: string, id_permissao: string }): Promise<funcoesPermissoes | undefined>
    atualizarFuncaoPermissao({}: DadosFuncaoPermissao): Promise<funcoesPermissoes>
    eliminarFuncaoPermissao(id_funcaoPermissao: string): Promise<void>
}