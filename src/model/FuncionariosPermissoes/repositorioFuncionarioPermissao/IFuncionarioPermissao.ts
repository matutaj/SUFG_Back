import { funcionariosPermissoes } from "@prisma/client";

export interface DadosFuncionarioPermissao {
    ID_funcionarioPermissao: string;
    ID_funcionario: string;  
    ID_permissao: string;
}
export interface IFuncionarioPermissao{
    criarFuncionarioPermissao({}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes>
    listarTodosFuncionariosPermissoes(): Promise<funcionariosPermissoes[]>
    listarUmFuncionarioPermissaoPeloId(ID_funcionarioPermissao: string): Promise<funcionariosPermissoes | undefined>
    atualizarFuncionarioPermissao({}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes>
    eliminarFuncionarioPermissao(ID_funcionarioPermissao: string): Promise<void>
}