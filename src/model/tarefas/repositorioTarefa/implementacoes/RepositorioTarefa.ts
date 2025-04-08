import { tarefas } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosTarefas, ITarefa } from "../ITarefa";


class TarefaRepositorio implements ITarefa {
    async criarTarefa({nome}: DadosTarefas): Promise<tarefas> {
        const criarTarefa = await prisma.tarefas.create({
            data: {
                nome
            }
        })
        return criarTarefa
    }
    async listarTodasTarefas(): Promise<tarefas[]> {
        const listarTodasTarefas = await prisma.tarefas.findMany();
        return listarTodasTarefas
    }
    async listarTarefaPeloId(id: string): Promise<tarefas | undefined> {
        const listarTarefaPeloId = await prisma.tarefas.findUnique({
            where: {
                id
            }
        }) || undefined
        return listarTarefaPeloId
    }
    async listarTarefaPeloNome(nome: string): Promise<tarefas | undefined> {
        const listarTarefaPeloNome = await prisma.tarefas.findFirst({
            where: {
                nome
            }
        }) || undefined
        return listarTarefaPeloNome
    }
    async atualizarTarefa({id, nome}: DadosTarefas): Promise<tarefas> {
        const atualizarTarefa = await prisma.tarefas.update({
            where: {
                id
            },
            data: {
                nome
            }
        })
        return atualizarTarefa
    }
    async eliminarTarefa(id: string): Promise<void> {
        await prisma.tarefas.delete({
            where: {
                id
            }
        })  
    }
}
export { TarefaRepositorio }