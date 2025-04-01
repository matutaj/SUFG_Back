import { Request, Response } from "express";
import { ListarUmaPrateleiraPeloIdCasoDeUso } from "./ListarPrateleiraPeloIdCasoDeUso";
import { listarPrateleiraPeloIdSchema } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";
class ListarUmaPrateleiraPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaPrateleiraPeloIdCasoDeUso =
      new ListarUmaPrateleiraPeloIdCasoDeUso();
    const { id } = req.params;
    if (!(await listarPrateleiraPeloIdSchema.isValid(req.params)))
      throw new AppError("Erro na Validação dos dados");
    const result = await listarUmaPrateleiraPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaPrateleiraPeloIdController };
