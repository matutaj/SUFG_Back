import { funcionariosCaixa } from "@prisma/client";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { AppError } from "../../../../errors/AppError";

class ListarUmFuncionarioCaixaPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionariosCaixa | undefined> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioCaixaPeloIdCasoDeUso };