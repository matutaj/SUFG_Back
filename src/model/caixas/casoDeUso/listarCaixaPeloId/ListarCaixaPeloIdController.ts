import { Request, Response } from "express";
import { ListarUmCaixaPeloIdCasoDeUso } from "./ListarCaixaPeloIdCasoDeUso";
import { listarCaixaPeloIdSchema } from "../../../../schema/caixas";
import { AppError } from "../../../../errors/AppError";
class ListarUmCaixaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmCaixaPeloIdCasoDeUso = new ListarUmCaixaPeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarCaixaPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmCaixaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmCaixaPeloIdController };