import { ListarTodosClienteCasoDeUso } from "./ListarTodosclienteCasoDeUso";
import { Request, Response } from "express";
class ListarTodosClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosClienteCasoDeUso = new ListarTodosClienteCasoDeUso();
    const result = await listarTodosClienteCasoDeUso.execute();
    return res.status(201).json(result);
  }
}
export { ListarTodosClienteController };
