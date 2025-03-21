import { Request, Response } from "express";
import { ListarUmFuncionarioPermissaoPeloIdCasoDeUso } from "./ListarUmFuncionarioPermissaoPeloIdCasoDeUso";

class ListarUmFuncionarioPermissaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioPermissaoPeloIdCasoDeUso = new ListarUmFuncionarioPermissaoPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmFuncionarioPermissaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioPermissaoPeloIdController };