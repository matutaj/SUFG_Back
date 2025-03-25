import { Request, Response } from "express";
import { ListarUmFuncionarioPermissaoPeloIdCasoDeUso } from "./ListarUmFuncionarioPermissaoPeloIdCasoDeUso";
import { listarFuncionarioPermissaoPeloIdSchema } from "../../../../schema/funcionariosPermissoes";
import { AppError } from "../../../../errors/AppError";
class ListarUmFuncionarioPermissaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioPermissaoPeloIdCasoDeUso = new ListarUmFuncionarioPermissaoPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarFuncionarioPermissaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFuncionarioPermissaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioPermissaoPeloIdController };