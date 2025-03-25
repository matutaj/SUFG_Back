import { Request, Response } from "express";
import { ListarUmProdutoPorIdCasoDeUso } from "./ListarProdutoPeloIdCasoDeUso";
import { listarProdutoPeloIdSchema } from "../../../../schema/produtos";
import { AppError } from "../../../../errors/AppError";
class ListarUmProdutoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmProdutoPorIdCasoDeUso = new ListarUmProdutoPorIdCasoDeUso();
    const { id } = req.params;
    if (!listarProdutoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmProdutoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmProdutoPorIdController };