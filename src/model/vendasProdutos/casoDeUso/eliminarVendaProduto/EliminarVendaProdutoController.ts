import { Request, Response } from "express";
import { DeleteVendaProdutoCasoDeUso } from "./EliminarVendaProdutoCasoDeUso";
import { deletarVendaProdutoSchema } from "../../../../schema/vendasProdutos";
import { AppError } from "../../../../errors/AppError";
class DeleteVendaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteVendaProdutoCasoDeUso = new DeleteVendaProdutoCasoDeUso();
    const { id } = req.params;
    if (!await deletarVendaProdutoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteVendaProdutoCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { DeleteVendaProdutoController };