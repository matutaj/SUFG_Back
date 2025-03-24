// src/controllers/ListarVendasPorPeriodoController.ts
import { Request, Response } from "express";
import { ListarVendasPorPeriodoCasoDeUso } from "./ListarVendasPorPeriodoCasoDeUso";

class ListarVendasPorPeriodoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim, limite } = req.query;
    const listarVendasPorPeriodoCasoDeUso =
      new ListarVendasPorPeriodoCasoDeUso();
    const result = await listarVendasPorPeriodoCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string),
      limite ? Number(limite) : undefined
    );
    return res.status(200).json(result);
  }
}

export { ListarVendasPorPeriodoController };
