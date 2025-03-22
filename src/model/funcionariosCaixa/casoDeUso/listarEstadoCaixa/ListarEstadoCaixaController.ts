import { Request, Response } from "express";
import { ListarEstadoCaixaCasoDeUso } from "./ListarEstadoCaixaCasoDeUso";

class ListarEstadoCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEstadoCaixaCasoDeUso = new ListarEstadoCaixaCasoDeUso();
    const { id_caixa } = req.params;
    const result = await listarEstadoCaixaCasoDeUso.execute(id_caixa);
    return res.status(200).json(result);
  }
}

export { ListarEstadoCaixaController };