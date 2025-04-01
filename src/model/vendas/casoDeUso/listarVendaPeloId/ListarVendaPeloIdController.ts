import { Request, Response } from "express";
import { ListarVendaPorIdCasoDeUso } from "./ListarVendaPeloIdCasoDeUso";
import { listarVendaPeloIdSchema } from "../../../../schema/vendas";
import { AppError } from "../../../../errors/AppError";
class ListarVendaPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarVendaPorIdCasoDeUso = new ListarVendaPorIdCasoDeUso();
    const { id } = req.params;
    if (!await listarVendaPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarVendaPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarVendaPorIdController };