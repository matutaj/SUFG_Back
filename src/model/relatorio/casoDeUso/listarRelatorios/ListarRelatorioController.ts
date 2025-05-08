import { Request, Response, RequestHandler } from "express";
import { Prisma } from "@prisma/client";
import {
  GerarRelatorioCasoDeUso,
  RelatorioParams,
} from "./ListarRelatorioCasoDeUso";
import { AppError } from "../../../../errors/AppError";

const endpointToTipoRelatorio: { [key: string]: string } = {
  "atividades-caixas": "atividades-caixas",
  "atividades-do-dia": "atividades-do-dia",
  "relatorio-entradas-estoque": "relatorio-entradas-estoque",
  "relatorio-estoque": "relatorio-estoque",
  "relatorio-produto-localizacao": "relatorio-produto-localizacao",
  "produtos-mais-vendidos": "produtos-mais-vendidos",
  transferencias: "transferencias",
  "faturamento-periodo": "faturamento-periodo",
  "relatorio-vendas": "relatorio-vendas",
  "vendas-cliente": "vendas-cliente",
};

class RelatorioControlador {
  handle: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      console.log("Método HTTP:", req.method);
      console.log("Headers:", req.headers);
      console.log("req.query:", req.query);
      console.log("req.body:", req.body);

      const {
        dataInicio,
        dataFim,
        data,
        idProduto,
        idCliente,
        idCaixa,
        limite,
      } = req.query;

      const endpoint = req.path.split("/").pop();
      if (!endpoint) {
        throw new AppError("Endpoint não especificado", 400);
      }

      const tipoRelatorio = endpointToTipoRelatorio[endpoint];
      if (!tipoRelatorio) {
        throw new AppError("Tipo de relatório não suportado", 400);
      }

      // Validação de parâmetros obrigatórios
      if (tipoRelatorio === "vendas-cliente" && !idCliente) {
        throw new AppError("ID do cliente é obrigatório", 400);
      }

      if (tipoRelatorio !== "atividades-do-dia" && (!dataInicio || !dataFim)) {
        throw new AppError("Datas de início e fim são obrigatórias", 400);
      }

      if (tipoRelatorio === "atividades-do-dia" && !data) {
        throw new AppError("Data é obrigatória", 400);
      }

      let parsedDataInicio: Date | undefined;
      let parsedDataFim: Date | undefined;
      let parsedData: Date | undefined;

      if (dataInicio) {
        parsedDataInicio = new Date(dataInicio as string);
        if (isNaN(parsedDataInicio.getTime())) {
          throw new AppError("Formato de dataInicio inválido", 400);
        }
      }

      if (dataFim) {
        parsedDataFim = new Date(dataFim as string);
        if (isNaN(parsedDataFim.getTime())) {
          throw new AppError("Formato de dataFim inválido", 400);
        }
      }

      if (data) {
        parsedData = new Date(data as string);
        if (isNaN(parsedData.getTime())) {
          throw new AppError("Formato de data inválido", 400);
        }
      }

      if (
        parsedDataInicio &&
        parsedDataFim &&
        parsedDataInicio > parsedDataFim
      ) {
        throw new AppError(
          "Data de início não pode ser maior que data de fim",
          400
        );
      }

      const maxLimite = 1000;
      const defaultLimite = 100;
      const parsedLimite = limite
        ? Math.min(Number(limite), maxLimite)
        : defaultLimite;

      const params: RelatorioParams = {
        tipoRelatorio,
        dataInicio: parsedDataInicio,
        dataFim: parsedDataFim,
        data: parsedData,
        idProduto: idProduto as string | undefined,
        idCliente: idCliente as string | undefined,
        idCaixa: idCaixa as string | undefined,
        limite: parsedLimite,
      };

      console.log("Parâmetros para o caso de uso:", params);

      const gerarRelatorioCasoDeUso = new GerarRelatorioCasoDeUso();
      const response = await gerarRelatorioCasoDeUso.execute(params);

      console.log(`Gerando JSON para ${tipoRelatorio}`);
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ data: response.data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error("Erro Prisma:", error.message);
        res.setHeader("Content-Type", "application/json");
        res
          .status(503)
          .json({ error: `Erro no banco de dados: ${error.message}` });
      } else if (error instanceof AppError) {
        console.error("Erro da aplicação:", error.message);
        res.setHeader("Content-Type", "application/json");
        res.status(error.statusCode || 400).json({ error: error.message });
      } else {
        console.error("Erro inesperado:", error);
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  };
}

export { RelatorioControlador };
