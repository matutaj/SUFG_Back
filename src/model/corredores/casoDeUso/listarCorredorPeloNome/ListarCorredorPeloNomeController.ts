import { ListarCorredorPeloNomeCasoDeUso } from "./ListarCorredorPeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarCorredorPeloNome } from "../../../../schema/corredores";
import { AppError } from "../../../../errors/AppError";
class ListarCorredorPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarCorredorPeloNomeCasoDeUso =
      new ListarCorredorPeloNomeCasoDeUso();
    const { nomeCorredor } = req.params;
    if (!listarCorredorPeloNome.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await listarCorredorPeloNomeCasoDeUso.execute(nomeCorredor);
    return res.status(201).json(result);
  }
}
export { ListarCorredorPeloNomeController };
