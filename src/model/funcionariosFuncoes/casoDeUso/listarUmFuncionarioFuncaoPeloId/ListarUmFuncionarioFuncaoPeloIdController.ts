import { Request, Response } from "express";
import { ListarUmFuncionarioFuncaoPeloIdCasoDeUso } from "./ListarUmFuncionarioFuncaoPeloIdCasoDeUso";

class ListarUmFuncionarioFuncaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioFuncaoPeloIdCasoDeUso = new ListarUmFuncionarioFuncaoPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmFuncionarioFuncaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioFuncaoPeloIdController };