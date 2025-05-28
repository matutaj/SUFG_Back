import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

interface RelatorioParams {
  tipoRelatorio: string;
  dataInicio?: Date;
  dataFim?: Date;
  data?: Date;
  idProduto?: string;
  idCliente?: string;
  idCaixa?: string;
  limite?: number;
}

interface RelatorioResponse {
  data: any;
}

class GerarRelatorioCasoDeUso {
  private repositorio = new RelatorioRepository();

  async execute(params: RelatorioParams): Promise<RelatorioResponse> {
    const {
      tipoRelatorio,
      dataInicio,
      dataFim,
      data,
      idProduto,
      idCliente,
      idCaixa,
      limite,
    } = params;

    // Validação de datas
    if (dataInicio && dataFim && dataInicio > dataFim) {
      throw new AppError("Data inicial deve ser anterior à data final");
    }

    let resultado: any;

    // Mapeamento dos relatórios
    switch (tipoRelatorio) {
      case "atividades-caixas":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarAtividadesCaixas(
          dataInicio,
          dataFim,
          idProduto,
          idCaixa
        );
        break;

      case "atividades-do-dia":
        if (!data) {
          throw new AppError("Data é obrigatória");
        }
        resultado = await this.repositorio.listarAtividadesDoDia(data);
        break;

      case "relatorio-entradas-estoque":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarEntradasEstoquePorPeriodo(
          dataInicio,
          dataFim,
          idProduto
        );
        break;

      case "relatorio-estoque":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarRelatorioEstoque(
          dataInicio,
          dataFim,
          idProduto
        );
        break;

      case "relatorio-produto-localizacao":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarRelatorioProdutoLocalizacao(
          dataInicio,
          dataFim,
          idProduto
        );
        break;

      case "produtos-mais-vendidos":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarProdutosMaisVendidos(
          dataInicio,
          dataFim,
          limite
        );
        break;

      case "transferencias":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarRelatorioTransferencias(
          dataInicio,
          dataFim
        );
        break;

      case "faturamento-periodo":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarFaturamentoPorPeriodo(
          dataInicio,
          dataFim
        );
        break;

      case "relatorio-vendas":
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarRelatorioVendas(
          dataInicio,
          dataFim,
          idProduto
        );
        break;

      case "vendas-cliente":
        if (!idCliente) {
          throw new AppError("ID do cliente é obrigatório");
        }
        if (!dataInicio || !dataFim) {
          throw new AppError("Datas de início e fim são obrigatórias");
        }
        resultado = await this.repositorio.listarVendasPorCliente(
          idCliente,
          dataInicio,
          dataFim
        );
        break;

      default:
        throw new AppError("Tipo de relatório inválido");
    }

    if (!resultado || (Array.isArray(resultado) && resultado.length === 0)) {
      throw new AppError("Nenhum dado encontrado para o relatório");
    }

    return { data: resultado };
  }
}

export { GerarRelatorioCasoDeUso, RelatorioParams };
