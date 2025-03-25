import { Request, Response } from "express";
import { ListarUmCorredorPeloIdCasoDeUso } from "./ListarCorredorPeloIdCasoDeUso";
import { listarCorredorPeloIdSchema } from "../../../../schema/corredores";
import { AppError } from "../../../../errors/AppError";
class ListarUmCorredorPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmCorredorPeloIdCasoDeUso =
      new ListarUmCorredorPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarCorredorPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmCorredorPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmCorredorPeloIdController };
