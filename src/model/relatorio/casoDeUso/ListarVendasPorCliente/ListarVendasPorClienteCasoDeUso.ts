// src/casos-de-uso/ListarVendasPorClienteCasoDeUso.ts
import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import { vendas } from "@prisma/client";

class ListarVendasPorClienteCasoDeUso {
  async execute(
    idCliente: string,
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const repositorio = new RelatorioRepository();

    if (!idCliente) throw new AppError("ID do cliente é obrigatório");
    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarVendasPorCliente(
      idCliente,
      dataInicio,
      dataFim,
      limite
    );
    return result;
  }
}

export { ListarVendasPorClienteCasoDeUso };
