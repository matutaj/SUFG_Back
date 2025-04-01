import { Request, Response } from "express";
import { DeleteProdutoCasoDeUso } from "./DeleteProdutoCasoDeUso";
import { deletarProdutoSchema } from "../../../../schema/produtos";
import { AppError } from "../../../../errors/AppError";
class DeleteProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteProdutoCasoDeUso = new DeleteProdutoCasoDeUso();
    const { id } = req.params;
    if (!await deletarProdutoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteProdutoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteProdutoController };