import { Request, Response } from "express";
import { GerarRelatorioCasoDeUso } from "./ListarRelatorioCasoDeUso";
import fs from "fs";
import { AppError } from "../../../../errors/AppError";

class RelatorioControlador {
  async handle(req: Request, res: Response): Promise<void> {
   
      const { data, limite, idProduto, idCliente } = req.body;
      const {
        idCliente: idClienteParam,
        idProduto: idProdutoParam,
        idCaixa,
      } = req.params;

      const parseDate = (dateStr: any): Date | null => {
        if (!dateStr) return null;
        try {
          const date = new Date(dateStr);
          return isNaN(date.getTime()) ? null : date;
        } catch {
          return null;
        }
      };

      const dataInicio = parseDate(req.body.dataInicio);
      const dataFim = parseDate(req.body.dataFim);

      if (!dataInicio || !dataFim) {
        throw new AppError("Datas inválidas ou ausentes");
      }

      if (!dataInicio && !dataFim && !data && !req.path.includes("caixas")) {
        throw new AppError("Pelo menos uma data é obrigatória");
      }

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

      const casoDeUso = new GerarRelatorioCasoDeUso();
      const { filePath } = await casoDeUso.execute({
        tipoRelatorio,
        dataInicio: dataInicio || undefined,
        dataFim: dataFim,
        data: data ? new Date(data as string) : undefined,
        idProduto: idProdutoParam || (idProduto as string) || undefined,
        idCliente: idClienteParam || (idCliente as string) || undefined,
        idCaixa: idCaixa || (req.query.idCaixa as string) || undefined,
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
