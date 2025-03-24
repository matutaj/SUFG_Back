// src/casos-de-uso/ListarVendasPorPeriodoCasoDeUso.ts
import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import { vendas } from "@prisma/client";

class ListarVendasPorPeriodoCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const repositorio = new RelatorioRepository();
    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarVendasPorPeriodo(
      dataInicio,
      dataFim,
      limite
    );
    return result;
  }
}

export { ListarVendasPorPeriodoCasoDeUso };
