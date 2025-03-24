// src/controllers/ListarEntradasEstoquePorPeriodoController.ts
import { Request, Response } from "express";
import { ListarEntradasEstoquePorPeriodoCasoDeUso } from "./ListarEntradasEstoquePorPeriodoCasoDeUso";

class ListarEntradasEstoquePorPeriodoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarEntradasEstoquePorPeriodoCasoDeUso =
      new ListarEntradasEstoquePorPeriodoCasoDeUso();
    const result = await listarEntradasEstoquePorPeriodoCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarEntradasEstoquePorPeriodoController };
