// src/casos-de-uso/ListarEntradasEstoquePorPeriodoCasoDeUso.ts
import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import { entradasEstoque } from "@prisma/client";

class ListarEntradasEstoquePorPeriodoCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(entradasEstoque & { funcionarioNome: string })[]> {
    const repositorio = new RelatorioRepository();

    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarEntradasEstoquePorPeriodo(
      dataInicio,
      dataFim
    );
    return result;
  }
}

export { ListarEntradasEstoquePorPeriodoCasoDeUso };
