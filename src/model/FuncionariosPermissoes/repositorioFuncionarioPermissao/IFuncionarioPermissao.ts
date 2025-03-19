import { funcionariosPermissoes } from "@prisma/client";

export interface DadosFuncionarioPermissao {
    id?: string;
    id_funcionario: string;  
    id_permissao: string;
}
export interface IFuncionarioPermissao{
    criarFuncionarioPermissao({}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes>
    listarTodosFuncionariosPermissoes(): Promise<funcionariosPermissoes[]>
    listarUmFuncionarioPermissaoPeloId(ID_funcionarioPermissao: string): Promise<funcionariosPermissoes | undefined>
    atualizarFuncionarioPermissao({}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes>
    eliminarFuncionarioPermissao(ID_funcionarioPermissao: string): Promise<void>
}