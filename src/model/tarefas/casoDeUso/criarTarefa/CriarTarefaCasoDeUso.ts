import { tarefas } from "@prisma/client";
import { DadosTarefas } from "../../repositorioTarefa/ITarefa";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class CriarTarefaCasoDeUso {
  async execute({ nome }: DadosTarefas): Promise<tarefas> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.criarTarefa({ nome });
    return result;
  }
}

export { CriarTarefaCasoDeUso };