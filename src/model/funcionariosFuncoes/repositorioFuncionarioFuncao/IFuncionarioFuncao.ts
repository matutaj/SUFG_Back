import { funcionariosFuncoes } from "@prisma/client";

export interface DadosFuncionarioFuncao {
    ID_funcionarioFuncao: string;
    ID_funcionario: string;
    ID_funcao: string;
}
export interface IFuncionarioFuncao{
    criarFuncionarioFuncao({ID_funcionario, ID_funcao}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes>;
    listarTodosFuncionariosFuncoes(): Promise<funcionariosFuncoes[]>;
    listarUmFuncionarioFuncaoPeloId(ID_funcionarioFuncao: string): Promise<funcionariosFuncoes | undefined>;
    eliminarFuncionarioFuncao(id: string): Promise<void>;
    atualizarFuncionarioFuncao({ID_funcionarioFuncao, ID_funcionario, ID_funcao}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes>;
}