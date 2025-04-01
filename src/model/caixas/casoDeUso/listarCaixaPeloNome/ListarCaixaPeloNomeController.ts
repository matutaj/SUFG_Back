import { Request, Response } from "express";
import { ListarCaixaPeloNomeCasoDeUso } from "./ListarCaixaPeloNomeCasoDeUso";
import { listarCaixaPeloNome } from "../../../../schema/caixas";
import { AppError } from "../../../../errors/AppError";
class ListarCaixaPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarCaixaPeloNomeCasoDeUso = new ListarCaixaPeloNomeCasoDeUso();
    const { nomeCaixa } = req.params;
    if (!await listarCaixaPeloNome.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await listarCaixaPeloNomeCasoDeUso.execute(nomeCaixa);
    return res.status(201).json(result);
  }
}
export { ListarCaixaPeloNomeController };
