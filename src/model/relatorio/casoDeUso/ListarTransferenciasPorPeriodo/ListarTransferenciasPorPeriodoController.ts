// src/controllers/ListarTransferenciasPorPeriodoController.ts
import { Request, Response } from "express";
import { ListarTransferenciasPorPeriodoCasoDeUso } from "./ListarTransferenciasPorPeriodoCasoDeUso";

class ListarTransferenciasPorPeriodoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarTransferenciasPorPeriodoCasoDeUso =
      new ListarTransferenciasPorPeriodoCasoDeUso();
    const result = await listarTransferenciasPorPeriodoCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarTransferenciasPorPeriodoController };
