import { Request, Response } from "express";
import { ListarQuantidadeFaturadaPorCaixaCasoDeUso } from "./ListarQuantidadeFaturadaPorCaixaCasoDeUso";

class ListarQuantidadeFaturadaPorCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarQuantidadeFaturadaPorCaixaCasoDeUso =
      new ListarQuantidadeFaturadaPorCaixaCasoDeUso();
    const result = await listarQuantidadeFaturadaPorCaixaCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarQuantidadeFaturadaPorCaixaController };
