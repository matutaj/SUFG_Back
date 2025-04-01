import { Request, Response } from "express";
import { ListarEstadoCaixaCasoDeUso } from "./ListarEstadoCaixaCasoDeUso";
import { listarEstadoCaixaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
class ListarEstadoCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEstadoCaixaCasoDeUso = new ListarEstadoCaixaCasoDeUso();
    const { id_caixa } = req.params;
    if (!await listarEstadoCaixaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarEstadoCaixaCasoDeUso.execute(id_caixa);
    return res.status(200).json(result);
  }
}

export { ListarEstadoCaixaController };