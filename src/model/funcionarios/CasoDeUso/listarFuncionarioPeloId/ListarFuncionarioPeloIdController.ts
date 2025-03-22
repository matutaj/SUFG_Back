import { Request, Response } from "express";
import { ListarUmFuncionarioPeloIdCasoDeUso } from "./ListarFuncionarioPeloIdCasoDeUso";
class ListarUmFuncionarioPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioPeloIdCasoDeUso = new ListarUmFuncionarioPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmFuncionarioPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioPeloIdController };