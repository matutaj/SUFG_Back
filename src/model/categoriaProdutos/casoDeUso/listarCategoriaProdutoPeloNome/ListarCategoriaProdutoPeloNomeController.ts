import { Request, Response } from "express";
import { ListarCategoriaProdutoPeloNomeCasoDeUso } from "./ListarCategoriaProdutoPeloNomeCasoDeUso";
import { listarCategoriaProdutoPeloNome } from "../../../../schema/categoriaProduto";
import { AppError } from "../../../../errors/AppError";
class ListarCategoriaProdutoPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarCategoriaProdutoPeloNomeCasoDeUso =
      new ListarCategoriaProdutoPeloNomeCasoDeUso();
    const { nomeCategoria } = req.params;
    if (!listarCategoriaProdutoPeloNome.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await listarCategoriaProdutoPeloNomeCasoDeUso.execute(
      nomeCategoria
    );
    return res.status(201).json(result);
  }
}
export { ListarCategoriaProdutoPeloNomeController };
