import { ListarClientePeloNomeCasoDeUso } from "./ListarClientePeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarClientePeloNome } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class ListarClientePeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarClientePeloNomeCasoDeUso = new ListarClientePeloNomeCasoDeUso();
    const { nomeCliente } = req.params;
    if (!await listarClientePeloNome.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarClientePeloNomeCasoDeUso.execute(nomeCliente);
    return res.status(201).json(result);
  }
}

export { ListarClientePeloNomeController };
