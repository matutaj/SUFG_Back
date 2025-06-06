import { Request, Response } from "express";
import { ListarUmEstoquePeloLoteCasoDeUso } from "./ListarUmEstoquePeloLoteCasoDeUso";
import { listarEstoquePeloLoteSchema } from "../../../../schema/estoques";
import { AppError } from "../../../../errors/AppError";
class ListarUmEstoquePeloLoteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmEstoquePeloLoteCasoDeUso =
      new ListarUmEstoquePeloLoteCasoDeUso();
    const { id_produto } = req.params;
    //if(!await listarEstoquePeloLoteSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmEstoquePeloLoteCasoDeUso.execute(id_produto);
    return res.status(200).json(result);
  }
}

export { ListarUmEstoquePeloLoteController };
