import { Request, Response } from "express";
import { DeleteCategoriaProdutoCasoDeUso } from "./DeleteCategoriaProdutoCasoDeUso";
import { deletarCategoriaProdutoSchema } from "../../../../schema/categoriaProduto";
import { AppError } from "../../../../errors/AppError";
class DeleteCategoriaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteCategoriaProdutoCasoDeUso =
      new DeleteCategoriaProdutoCasoDeUso();
    const { id } = req.params;
    if (!deletarCategoriaProdutoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    await deleteCategoriaProdutoCasoDeUso.execute(id);
    return res.status(204).json();
  }
}
export { DeleteCategoriaProdutoController };
