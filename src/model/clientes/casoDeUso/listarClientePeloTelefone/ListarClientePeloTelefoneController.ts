import { Request, Response } from "express";
import { ListarTelefoneClienteCasoDeUso } from "./ListarClientePeloTelefoneCasoDeUso";
class ListarTelefoneClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTelefoneClienteCasoDeUso = new ListarTelefoneClienteCasoDeUso();
    const { telefoneCliente } = req.query;
    const result = await listarTelefoneClienteCasoDeUso.execute(telefoneCliente as string);
    return res.status(200).json(result);
  }
}

export { ListarTelefoneClienteController };