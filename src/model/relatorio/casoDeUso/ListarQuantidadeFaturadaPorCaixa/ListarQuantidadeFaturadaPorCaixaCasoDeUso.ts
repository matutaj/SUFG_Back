import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

class ListarQuantidadeFaturadaPorCaixaCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      idCaixa: string;
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarios: string[];
    }[]
  > {
    const repositorio = new RelatorioRepository();

    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarQuantidadeFaturadaPorCaixa(
      dataInicio,
      dataFim
    );
    return result;
  }
}

export { ListarQuantidadeFaturadaPorCaixaCasoDeUso };
