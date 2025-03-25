import { Request, Response } from "express";
import { ListarUmaPermissaoPorIdCasoDeUso } from "./ListarPermissaoPeloIdCasoDeUso";
import { listarPermissaoPeloIdSchema } from "../../../../schema/permissoes";
import { AppError } from "../../../../errors/AppError";
class ListarUmaPermissaoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaPermissaoPorIdCasoDeUso = new ListarUmaPermissaoPorIdCasoDeUso();
    const { id } = req.params;
    if (!listarPermissaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmaPermissaoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaPermissaoPorIdController };