import { Request, Response } from "express";
import { ListarVendaProdutoPorIdCasoDeUso } from "./ListarVendaProdutoPeloIdCasoDeUso";
import { listarVendaProdutoPeloIdSchema } from "../../../../schema/vendasProdutos";
import { AppError } from "../../../../errors/AppError";
class ListarVendaProdutoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarVendaProdutoPorIdCasoDeUso = new ListarVendaProdutoPorIdCasoDeUso();
    const { id } = req.params;
    if (!listarVendaProdutoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarVendaProdutoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarVendaProdutoPorIdController };