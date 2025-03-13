import { funcoesPermissoes } from "@prisma/client";

export interface DadosFuncaoPermissao{
    ID_funcaoPermissao: string
    ID_funcao: string
    ID_permissao: string
}

export interface IFuncaoPermissao{
    criarFuncaoPermissao({}: DadosFuncaoPermissao): Promise<funcoesPermissoes>
    listarTodasFuncoesPermissoes(): Promise<funcoesPermissoes[]>
    listarUmaFuncaoPermissaoPeloId(ID_funcaoPermissao: string): Promise<funcoesPermissoes | undefined>
    atualizarFuncaoPermissao({}: DadosFuncaoPermissao): Promise<funcoesPermissoes>
    eliminarFuncaoPermissao(ID_funcaoPermissao: string): Promise<void>
}