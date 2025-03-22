import { Request, Response } from "express";
import { ListarUmaCategoriaProdutoPeloIdCasoDeUso } from "./ListarCategoriaProdutoPeloIdCasoDeUso";

class ListarUmaCategoriaProdutoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaCategoriaProdutoPeloIdCasoDeUso = new ListarUmaCategoriaProdutoPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmaCategoriaProdutoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaCategoriaProdutoPeloIdController };