import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

class ListarProdutosMaisVendidosCasoDeUso {
  async execute(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeVendida: number;
      valorTotal: number;
    }[]
  > {
    const repositorio = new RelatorioRepository();
    if (dataInicio > dataFim)
      throw new AppError("Data inicial deve ser anterior à data final");
    const result = await repositorio.listarProdutosMaisVendidos(
      dataInicio,
      dataFim,
      limite
    );

    return result;
  }
}

export { ListarProdutosMaisVendidosCasoDeUso };
