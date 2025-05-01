import { Request, Response } from "express";
import { GerarRelatorioCasoDeUso } from "./ListarRelatorioCasoDeUso";
import fs from "fs";
import { AppError } from "../../../../errors/AppError";

class RelatorioControlador {
  async handle(req: Request, res: Response): Promise<void> {
    const { data, limite, idProduto, idCliente, idCaixa } = req.body;
    const { idCliente: idClienteParam, idProduto: idProdutoParam } = req.body;

    const parseDate = (dateStr: any): Date => {
      if (!dateStr) throw new AppError("Data é obrigatória");
      try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) throw new AppError("Data inválida");
        return date;
      } catch {
        throw new AppError("Data inválida");
      }
    };

    const dataInicio = req.body.dataInicio
      ? parseDate(req.body.dataInicio)
      : undefined;
    const dataFim = req.body.dataFim ? parseDate(req.body.dataFim) : undefined;

    let tipoRelatorio: string;
    switch (req.path.split("/").pop()) {
      case "vendas-periodo":
        tipoRelatorio = "vendas-por-periodo";
        break;
      case "vendas-cliente":
        tipoRelatorio = "vendas-por-cliente";
        break;
      case "produtos-mais-vendidos":
        tipoRelatorio = "produtos-mais-vendidos";
        break;
      case "faturamento-periodo":
        tipoRelatorio = "faturamento-por-periodo";
        break;
      case "faturamento-caixa":
        tipoRelatorio = "quantidade-faturada-por-caixa";
        break;
      case "estoque-atual":
        tipoRelatorio = "estoque-atual";
        break;
      case "entradas-estoque":
        tipoRelatorio = "entradas-estoque-por-periodo";
        break;
      case "transferencias":
        tipoRelatorio = "transferencias-por-periodo";
        break;
      case "produtos-abaixo-minimo":
        tipoRelatorio = "produtos-abaixo-minimo";
        break;
      case "atividade-caixa":
        tipoRelatorio = "atividade-funcionarios-caixa";
        break;
      case "periodo-mais-vendido":
        tipoRelatorio = "periodo-mais-vendido-por-produto";
        break;
      case "atividades-caixas":
        tipoRelatorio = "atividades-caixas";
        break;
      case "tarefas":
        tipoRelatorio = "tarefas";
        break;
      case "relatorio-vendas":
        tipoRelatorio = "relatorio-vendas";
        break;
      case "relatorio-estoque":
        tipoRelatorio = "relatorio-estoque";
        break;
      case "relatorio-entradas-estoque":
        tipoRelatorio = "relatorio-entradas-estoque";
        break;
      case "relatorio-produtos":
        tipoRelatorio = "relatorio-produtos";
        break;
      case "relatorio-produto-localizacao":
        tipoRelatorio = "relatorio-produto-localizacao";
        break;
      case "atividades-do-dia":
        tipoRelatorio = "atividades-do-dia";
        break;
      case "caixas":
        tipoRelatorio = "relatorio-caixas";
        break;
      default:
        throw new AppError("Rota de relatório inválida");
    }

    if (
      tipoRelatorio !== "relatorio-caixas" &&
      tipoRelatorio !== "atividades-do-dia" &&
      (!dataInicio || !dataFim)
    ) {
      throw new AppError("Datas de início e fim são obrigatórias");
    }

    const casoDeUso = new GerarRelatorioCasoDeUso();
    const { filePath } = await casoDeUso.execute({
      tipoRelatorio,
      dataInicio,
      dataFim,
      data: data ? new Date(data) : undefined,
      idProduto: idProdutoParam || idProduto || undefined,
      idCliente: idClienteParam || idCliente || undefined,
      idCaixa: idCaixa || req.query.idCaixa || undefined,
      limite: limite ? Number(limite) : undefined,
    });

    res.download(filePath, (err) => {
      if (err) {
        res.status(500).json({
          error: "Erro ao enviar o arquivo",
          details: err.message,
        });
        return;
      }
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          res.status(500).json({
            error: "Erro ao excluir o arquivo temporário",
            details: unlinkErr.message,
          });
        }
      });
    });
  }
}

export { RelatorioControlador };
