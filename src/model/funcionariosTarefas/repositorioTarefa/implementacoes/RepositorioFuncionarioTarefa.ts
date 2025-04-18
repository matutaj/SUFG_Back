import { funcionariosTarefas } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosFuncionarioTarefa, IFuncionarioTarefa } from "../IFuncionarioTarefa";

class FuncionarioTarefaRepositorio implements IFuncionarioTarefa {
    async criarFuncionarioTarefa({id_funcionario, id_tarefa, status}: DadosFuncionarioTarefa): Promise<funcionariosTarefas> {
        const criarFuncionarioTarefa = await prisma.funcionariosTarefas.create({ data: { id_funcionario, id_tarefa, status }})
        return criarFuncionarioTarefa
    }
    async listarTodosFuncionariosTarefas(): Promise<funcionariosTarefas[]> {
        const listarTodosFuncionariosTarefas = await prisma.funcionariosTarefas.findMany()
        return listarTodosFuncionariosTarefas  
    }
    async listarUmFuncionarioTarefaPeloId(id: string): Promise<funcionariosTarefas | undefined> {
        const listarUmFuncionarioTarefaPeloId = await prisma.funcionariosTarefas.findUnique({ where: { id } }) || undefined
        return listarUmFuncionarioTarefaPeloId
    }
    async atualizarFuncionarioTarefa({id, id_funcionario, id_tarefa, status}: DadosFuncionarioTarefa): Promise<funcionariosTarefas> {
        const atualizarFuncionarioTarefa = await prisma.funcionariosTarefas.update({ where: { id }, data: { id_funcionario, id_tarefa, status }})
        return atualizarFuncionarioTarefa
    }
    async eliminarFuncionarioTarefa(id: string): Promise<void> {
        await prisma.funcionariosTarefas.delete({ where: { id } }); 
    }
}
export { FuncionarioTarefaRepositorio }