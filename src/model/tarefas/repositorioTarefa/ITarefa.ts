import { tarefas } from "@prisma/client";

export interface DadosTarefas {
    id?: string;
    nome: string;
}
export interface ITarefa{
    criarTarefa({nome}: DadosTarefas): Promise<tarefas>
    listarTodasTarefas(): Promise<tarefas[]>
    listarTarefaPeloId(id: string): Promise<tarefas | undefined>
    listarTarefaPeloNome(nome: string): Promise<tarefas | undefined>
    atualizarTarefa({id, nome}: DadosTarefas): Promise<tarefas>
    eliminarTarefa(id: string): Promise<void>
}