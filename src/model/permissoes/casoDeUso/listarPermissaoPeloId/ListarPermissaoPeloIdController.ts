import { Request, Response } from "express";
import { ListarUmaPermissaoPorIdCasoDeUso } from "./ListarPermissaoPeloIdCasoDeUso";
class ListarUmaPermissaoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaPermissaoPorIdCasoDeUso = new ListarUmaPermissaoPorIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmaPermissaoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaPermissaoPorIdController };