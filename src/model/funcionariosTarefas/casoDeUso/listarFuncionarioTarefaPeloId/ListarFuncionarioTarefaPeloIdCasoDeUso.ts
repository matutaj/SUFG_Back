import { funcionariosTarefas } from "@prisma/client";
import { FuncionarioTarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioFuncionarioTarefa";
class ListarUmFuncionarioTarefaPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionariosTarefas | undefined> {
    const repositorioFuncionarioTarefa = new FuncionarioTarefaRepositorio();
    const result = await repositorioFuncionarioTarefa.listarUmFuncionarioTarefaPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioTarefaPeloIdCasoDeUso };