import { Request, Response } from "express";
import { ListarTodosLocalizacoesCasoDeUso } from "./ListarTodasLocalizacoesCasoDeUso";
class ListarTodosLocalizacoesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosLocalizacoesCasoDeUso =
      new ListarTodosLocalizacoesCasoDeUso();
    const result = await listarTodosLocalizacoesCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosLocalizacoesController };
