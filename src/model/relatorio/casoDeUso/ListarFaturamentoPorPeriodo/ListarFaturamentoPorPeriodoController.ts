// src/controllers/ListarFaturamentoPorPeriodoController.ts
import { Request, Response } from "express";
import { ListarFaturamentoPorPeriodoCasoDeUso } from "./ListarFaturamentoPorPeriodoCasoDeUso";

class ListarFaturamentoPorPeriodoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarFaturamentoPorPeriodoCasoDeUso =
      new ListarFaturamentoPorPeriodoCasoDeUso();
    const result = await listarFaturamentoPorPeriodoCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarFaturamentoPorPeriodoController };
