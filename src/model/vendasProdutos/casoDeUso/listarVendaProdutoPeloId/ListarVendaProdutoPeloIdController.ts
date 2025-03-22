import { Request, Response } from "express";
import { ListarVendaProdutoPorIdCasoDeUso } from "./ListarVendaProdutoPeloIdCasoDeUso";

class ListarVendaProdutoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarVendaProdutoPorIdCasoDeUso = new ListarVendaProdutoPorIdCasoDeUso();
    const { id } = req.params;
    const result = await listarVendaProdutoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarVendaProdutoPorIdController };