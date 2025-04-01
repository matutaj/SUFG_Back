import { Request, Response } from "express";
import { ListarUmaCategoriaProdutoPeloIdCasoDeUso } from "./ListarCategoriaProdutoPeloIdCasoDeUso";
import { listarCategoriaProdutoPeloIdSchema } from "../../../../schema/categoriaProduto";
import { AppError } from "../../../../errors/AppError";
class ListarUmaCategoriaProdutoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaCategoriaProdutoPeloIdCasoDeUso = new ListarUmaCategoriaProdutoPeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarCategoriaProdutoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmaCategoriaProdutoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaCategoriaProdutoPeloIdController };