import { funcionariosFuncoes } from "@prisma/client";

export interface DadosFuncionarioFuncao {
    id?: string;
    id_funcionario: string;
    id_funcao: string;
}
export interface IFuncionarioFuncao{
    criarFuncionarioFuncao({}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes>;
    listarTodosFuncionariosFuncoes(): Promise<funcionariosFuncoes[]>;
    listarUmFuncionarioFuncaoPeloId(id: string): Promise<funcionariosFuncoes | undefined>;
    eliminarFuncionarioFuncao(id: string): Promise<void>;
    atualizarFuncionarioFuncao({id }: DadosFuncionarioFuncao): Promise<funcionariosFuncoes>;
}