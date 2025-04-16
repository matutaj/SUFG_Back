import { Request, Response } from "express";
import { ListarEstoqueAtualCasoDeUso } from "./ListarEstoqueAtualCasoDeUso";

class ListarEstoqueAtualController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarEstoqueAtualCasoDeUso = new ListarEstoqueAtualCasoDeUso();
    const result = await listarEstoqueAtualCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarEstoqueAtualController };
