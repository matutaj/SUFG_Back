import { ListarPrateleiraPeloNomeCasoDeUso } from "./listarPrateleiraPeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarPrateleiraPeloNome } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";
class ListarPrateleiraPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const prateleiraCasoDeUso = new ListarPrateleiraPeloNomeCasoDeUso();
    const { nomePrateleira } = req.body;
    if (!listarPrateleiraPeloNome.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    const result = await prateleiraCasoDeUso.execute(nomePrateleira);
    return res.status(200).json(result);
  }
}
export { ListarPrateleiraPeloNomeController };
