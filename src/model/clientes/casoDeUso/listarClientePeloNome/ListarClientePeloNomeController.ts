import { ListarClientePeloNomeCasoDeUso } from "./ListarClientePeloNomeCasoDeUso";
import { Request, Response } from "express";
class ListarClientePeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarClientePeloNomeCasoDeUso = new ListarClientePeloNomeCasoDeUso();
    const { nomeCliente } = req.params;
    const result = await listarClientePeloNomeCasoDeUso.execute(nomeCliente);
    return res.status(201).json(result);
  }
}

export { ListarClientePeloNomeController };
