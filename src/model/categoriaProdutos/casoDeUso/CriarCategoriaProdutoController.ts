import { Request, Response } from "express";
import { CriarCategoriaProdutoCasoDeUso } from "./CriarCategoriaProdutoCasoDeUso";
class CriarCategoriaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const categoriaProdutoCasoDeUso = new CriarCategoriaProdutoCasoDeUso();
    const { nomeCategoria, descricaoCategoria } = req.body;
    const result = await categoriaProdutoCasoDeUso.execute({
      nomeCategoria,
      descricaoCategoria,
    });
    return res.status(201).json(result);
  }
}
export { CriarCategoriaProdutoController };
