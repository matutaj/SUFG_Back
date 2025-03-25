import { Request, Response } from "express";
import { ListarUmFornecedorPeloIdCasoDeUso } from "./ListarFornecedorPeloIdCasoDeUso";
import { listarFornecedorPeloIdSchema } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";
class ListarUmFornecedorPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFornecedorPeloIdCasoDeUso = new ListarUmFornecedorPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarFornecedorPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFornecedorPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFornecedorPeloIdController };