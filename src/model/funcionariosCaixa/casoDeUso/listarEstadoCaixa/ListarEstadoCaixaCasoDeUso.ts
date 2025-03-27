import { funcionariosCaixa } from "@prisma/client";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { AppError } from "../../../../errors/AppError";

class ListarEstadoCaixaCasoDeUso {
  async execute(id_caixa: string): Promise<funcionariosCaixa | undefined> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();

    if (!id_caixa) {
      throw new AppError("O ID do caixa é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioCaixa.listarEstadoCaixa(id_caixa);
    return result;
  }
}

export { ListarEstadoCaixaCasoDeUso };