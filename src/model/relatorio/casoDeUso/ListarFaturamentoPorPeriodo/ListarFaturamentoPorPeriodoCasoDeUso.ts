// src/casos-de-uso/ListarFaturamentoPorPeriodoCasoDeUso.ts
import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import { vendas } from "@prisma/client";

class ListarFaturamentoPorPeriodoCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
    totalFaturado: number;
    vendas: (vendas & { funcionarioNome: string })[];
  }> {
    const repositorio = new RelatorioRepository();

    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarFaturamentoPorPeriodo(
      dataInicio,
      dataFim
    );

    return result;
  }
}

export { ListarFaturamentoPorPeriodoCasoDeUso };
