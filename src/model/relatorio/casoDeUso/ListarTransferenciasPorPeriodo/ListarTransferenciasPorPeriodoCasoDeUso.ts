// src/casos-de-uso/ListarTransferenciasPorPeriodoCasoDeUso.ts
import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import { transferencias } from "@prisma/client";

class ListarTransferenciasPorPeriodoCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(transferencias & { funcionarioNome: string })[]> {
    const repositorio = new RelatorioRepository();

    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarTransferenciasPorPeriodo(
      dataInicio,
      dataFim
    );
    return result;
  }
}

export { ListarTransferenciasPorPeriodoCasoDeUso };
