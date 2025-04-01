import { Request, Response } from "express";
import { ListarTelefoneClienteCasoDeUso } from "./ListarClientePeloTelefoneCasoDeUso";
import { listarClienteTelefoneSchema } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class ListarTelefoneClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTelefoneClienteCasoDeUso = new ListarTelefoneClienteCasoDeUso();
    const { telefoneCliente } = req.query;
    if (!await listarClienteTelefoneSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados")
    const result = await listarTelefoneClienteCasoDeUso.execute(telefoneCliente as string);
    return res.status(200).json(result);
  }
}

export { ListarTelefoneClienteController };