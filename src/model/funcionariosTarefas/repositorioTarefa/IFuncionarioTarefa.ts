import { funcionariosTarefas } from "@prisma/client";

export interface DadosFuncionarioTarefa {
    id?: string
    id_funcionario: string;
    id_tarefa: string;
}
export interface IFuncionarioTarefa {
    criarFuncionarioTarefa({id_funcionario, id_tarefa}: DadosFuncionarioTarefa): Promise<funcionariosTarefas>
    listarTodosFuncionariosTarefas(): Promise<funcionariosTarefas[]>
    listarUmFuncionarioTarefaPeloId(id: string): Promise<funcionariosTarefas | undefined>
    atualizarFuncionarioTarefa({id, id_funcionario, id_tarefa}: DadosFuncionarioTarefa): Promise<funcionariosTarefas>
    eliminarFuncionarioTarefa(id: string): Promise<void>
}