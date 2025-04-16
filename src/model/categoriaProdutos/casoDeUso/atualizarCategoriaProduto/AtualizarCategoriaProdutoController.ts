import { Request, Response } from "express";
import { AtualizarCategoriaProdutoCasoDeUso } from "./AtualizarCategoriaProdutoCasoDeUso";
import { atualizarCategoriaProdutoSchema } from "../../../../schema/categoriaProduto";
import { AppError } from "../../../../errors/AppError";

class AtualizarCategoriaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    req.body.id = id;
    if (!(await atualizarCategoriaProdutoSchema.isValid(req.params)))
      throw new AppError("Erro na Validação dos dados");
    if (!(await atualizarCategoriaProdutoSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    const atualizarCategoriaProdutoCasoDeUso =
      new AtualizarCategoriaProdutoCasoDeUso();
    const categoria = await atualizarCategoriaProdutoCasoDeUso.execute(
      req.body
    );

    return res.json(categoria);
  }
}
export { AtualizarCategoriaProdutoController };
