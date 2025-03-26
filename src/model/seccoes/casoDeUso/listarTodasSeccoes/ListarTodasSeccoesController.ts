import { ListarTodasSeccoesCasoDeUso } from "./ListarTodasSeccoesCasoDeUso";
import { Request, Response } from "express";

class ListarTodasSeccoesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosClienteCasoDeUso = new ListarTodasSeccoesCasoDeUso();
    const result = await listarTodosClienteCasoDeUso.execute();
    return res.status(201).json(result);
  }
}
export { ListarTodasSeccoesController };
