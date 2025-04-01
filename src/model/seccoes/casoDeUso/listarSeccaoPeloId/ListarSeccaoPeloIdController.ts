import { Request, Response } from "express";
import { ListarUmaSeccaoPeloIdCasoDeUso } from "./ListarSeccaoPeloIdCasoDeUso";
import { listarSeccaoPeloIdSchema } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class ListarUmaSeccaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaSeccaoPeloIdCasoDeUso = new ListarUmaSeccaoPeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarSeccaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmaSeccaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaSeccaoPeloIdController };