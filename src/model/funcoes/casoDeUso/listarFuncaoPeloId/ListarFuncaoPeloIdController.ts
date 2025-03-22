import { Request, Response } from "express";
import { ListarFuncaoPeloIdCasoDeUso } from "./listarFuncaoPeloIdCasoDeUso";
class ListarFuncaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarFuncaoPeloIdCasoDeUso = new ListarFuncaoPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarFuncaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarFuncaoPeloIdController };