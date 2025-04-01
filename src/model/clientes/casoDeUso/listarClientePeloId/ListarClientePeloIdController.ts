import { Request, Response } from "express";
import { ListarUmClientePeloIdCasoDeUso } from "./ListarClientePeloIdCasoDeUso";
import { listarClientePeloIdSchema } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class ListarUmClientePeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmClientePeloIdCasoDeUso = new ListarUmClientePeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarClientePeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmClientePeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmClientePeloIdController };