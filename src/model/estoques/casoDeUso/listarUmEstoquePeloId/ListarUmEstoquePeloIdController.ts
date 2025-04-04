import { Request, Response } from "express";
import { ListarUmEstoquePeloIdCasoDeUso } from "./ListarUmEstoquePeloIdCasoDeUso";
import { listarEstoquePeloIdSchema } from "../../../../schema/estoques";
import { AppError } from "../../../../errors/AppError";
class ListarUmEstoquePeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmEstoquePeloIdCasoDeUso = new ListarUmEstoquePeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarEstoquePeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmEstoquePeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmEstoquePeloIdController };