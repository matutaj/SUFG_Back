import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import { funcionariosCaixa } from "@prisma/client";

class ListarAtividadeFuncionariosCaixaCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(funcionariosCaixa & { funcionarioNome: string })[]> {
    const repositorio = new RelatorioRepository();
    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarAtividadeFuncionariosCaixa(
      dataInicio,
      dataFim
    );
    return result;
  }
}

export { ListarAtividadeFuncionariosCaixaCasoDeUso };
