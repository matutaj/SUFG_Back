import { Request, Response } from "express";
import { ListarUmFuncionarioCaixaPeloIdCasoDeUso } from "./ListarUmFuncionarioCaixaPeloIDCasoDeUso";
class ListarUmFuncionarioCaixaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioCaixaPeloIdCasoDeUso = new ListarUmFuncionarioCaixaPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmFuncionarioCaixaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioCaixaPeloIdController };