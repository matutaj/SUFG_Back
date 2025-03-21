import { funcionariosCaixa } from "@prisma/client";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";

class ListarUmFuncionarioCaixaPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionariosCaixa | undefined> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioCaixaPeloIdCasoDeUso };