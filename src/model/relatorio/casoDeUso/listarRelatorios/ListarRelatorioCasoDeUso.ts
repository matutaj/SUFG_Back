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

class GerarRelatorioCasoDeUso {
  private repositorio = new RelatorioRepository();

  async execute(params: RelatorioParams): Promise<any> {
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

    // Validação de datas para relatórios que usam dataInicio e dataFim
    if (dataInicio && dataFim && dataInicio > dataFim) {
      throw new AppError("Data inicial deve ser anterior à data final");
    }

    switch (tipoRelatorio) {
      case "vendas-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarVendasPorPeriodo(
          dataInicio,
          dataFim,
          limite
        );

      case "vendas-por-cliente":
        if (!idCliente) throw new AppError("ID do cliente é obrigatório");
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarVendasPorCliente(
          idCliente,
          dataInicio,
          dataFim,
          limite
        );

      case "produtos-mais-vendidos":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarProdutosMaisVendidos(
          dataInicio,
          dataFim,
          limite
        );

      case "faturamento-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarFaturamentoPorPeriodo(
          dataInicio,
          dataFim
        );

      case "quantidade-faturada-por-caixa":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarQuantidadeFaturadaPorCaixa(
          dataInicio,
          dataFim
        );

      case "estoque-atual":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarEstoqueAtual(dataInicio, dataFim);

      case "entradas-estoque-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarEntradasEstoquePorPeriodo(
          dataInicio,
          dataFim
        );

      case "transferencias-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarTransferenciasPorPeriodo(
          dataInicio,
          dataFim
        );

      case "produtos-abaixo-minimo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarProdutosAbaixoMinimo(dataInicio, dataFim);

      case "atividade-funcionarios-caixa":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarAtividadeFuncionariosCaixa(
          dataInicio,
          dataFim
        );

      case "periodo-mais-vendido-por-produto":
        if (!idProduto) throw new AppError("ID do produto é obrigatório");
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarPeriodoMaisVendidoPorProduto(
          idProduto,
          dataInicio,
          dataFim
        );

      case "atividades-caixas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarAtividadesCaixas(
          dataInicio,
          dataFim,
          idProduto
        );

      case "tarefas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarTarefas(dataInicio, dataFim);

      case "relatorio-vendas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarRelatorioVendas(
          dataInicio,
          dataFim,
          idProduto
        );

      case "relatorio-estoque":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarRelatorioEstoque(
          dataInicio,
          dataFim,
          idProduto
        );

      case "relatorio-entradas-estoque":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarRelatorioEntradasEstoque(
          dataInicio,
          dataFim,
          idProduto
        );

      case "relatorio-produtos":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarRelatorioProdutos(dataInicio, dataFim);

      case "relatorio-produto-localizacao":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        return this.repositorio.listarRelatorioProdutoLocalizacao(
          dataInicio,
          dataFim,
          idProduto
        );

      case "atividades-do-dia":
        if (!data) throw new AppError("Data é obrigatória");
        return this.repositorio.listarAtividadesDoDia(data);

      case "relatorio-caixas":
        return this.repositorio.listarRelatorioCaixas(
          idCaixa,
          dataInicio,
          dataFim
        );

      default:
        throw new AppError("Tipo de relatório inválido");
    }
  }
}

export { GerarRelatorioCasoDeUso };
