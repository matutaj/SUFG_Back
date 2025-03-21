import { Request, Response } from "express";
import { ListarTodasFuncoesPermissoesCasoDeUso } from "./ListarTodasFuncoesPermissoesCasoDeUso";

class ListarTodasFuncoesPermissoesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodasFuncoesPermissoesCasoDeUso = new ListarTodasFuncoesPermissoesCasoDeUso();
    const result = await listarTodasFuncoesPermissoesCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodasFuncoesPermissoesController };