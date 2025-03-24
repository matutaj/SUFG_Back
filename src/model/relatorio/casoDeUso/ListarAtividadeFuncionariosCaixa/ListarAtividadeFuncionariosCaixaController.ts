import { Request, Response } from "express";
import { ListarAtividadeFuncionariosCaixaCasoDeUso } from "./ListarAtividadeFuncionariosCaixaCasoDeUso";

class ListarAtividadeFuncionariosCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarAtividadeFuncionariosCaixaCasoDeUso =
      new ListarAtividadeFuncionariosCaixaCasoDeUso();
    const result = await listarAtividadeFuncionariosCaixaCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarAtividadeFuncionariosCaixaController };
