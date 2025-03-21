import { criarCategoriaProdutoSchema } from "../../../../schema/categoriaProduto";
import { Request, Response } from "express";
import { CriarCategoriaProdutoCasoDeUso } from "./CriarCategoriaProdutoCasoDeUso";
import { AppError } from "../../../../errors/AppError";
class CriarCategoriaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const categoriaProdutoCasoDeUso = new CriarCategoriaProdutoCasoDeUso();
    const { nomeCategoria, descricaoCategoria } = req.body;
    if (!criarCategoriaProdutoSchema.isValid(req.body)) {
      throw new AppError("Erro na validação dos campos");
    }
    const result = await categoriaProdutoCasoDeUso.execute({
      nomeCategoria,
      descricaoCategoria,
    });
    return res.status(201).json(result);
  }
}
export { CriarCategoriaProdutoController };
