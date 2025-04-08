import { tarefas } from "@prisma/client";
import { DadosTarefas } from "../../repositorioTarefa/ITarefa";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class AtualizarTarefaCasoDeUso {
  async execute({ id, nome }: DadosTarefas): Promise<tarefas> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.atualizarTarefa({ id, nome });
    return result;
  }
}

export { AtualizarTarefaCasoDeUso };