import { Request, Response } from "express";
import { ListarTodosProdutosLocalizacoesCasoDeUso } from "./ListarTodosProdutosLocalizacoesCasoDeUso";

class ListarTodosProdutosLocalizacoesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosProdutosLocalizacoesCasoDeUso = new ListarTodosProdutosLocalizacoesCasoDeUso();
    const result = await listarTodosProdutosLocalizacoesCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosProdutosLocalizacoesController };