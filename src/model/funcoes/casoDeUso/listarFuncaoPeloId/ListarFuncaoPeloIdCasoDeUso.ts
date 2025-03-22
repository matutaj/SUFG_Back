import { funcoes } from "@prisma/client";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";

class ListarFuncaoPeloIdCasoDeUso {
  async execute(id: string): Promise<funcoes | undefined> {
    const repositorioFuncao = new FuncaoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncao.listarFuncaoPeloId(id);
    return result;
  }
}

export { ListarFuncaoPeloIdCasoDeUso };