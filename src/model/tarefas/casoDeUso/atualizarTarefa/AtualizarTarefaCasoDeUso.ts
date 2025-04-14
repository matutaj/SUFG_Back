import { tarefas } from "@prisma/client";
import { DadosTarefas } from "../../repositorioTarefa/ITarefa";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class AtualizarTarefaCasoDeUso {
  async execute({ id, nome, descricao}: DadosTarefas): Promise<tarefas> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.atualizarTarefa({ id, nome, descricao});
    return result;
  }
}

export { AtualizarTarefaCasoDeUso };