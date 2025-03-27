import { Request, Response } from "express";
import { CriarClienteCasoDeUso } from "./CriarClienteCasoDeUso";
import { criarClienteSchema } from "../../../../schema/clientes/";
import { AppError } from "../../../../errors/AppError";
class CriarClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const clienteCasoDeUso = new CriarClienteCasoDeUso();
    const {
      emailCliente,
      moradaCliente,
      nomeCliente,
      numeroContribuinte,
      telefoneCliente,
    } = req.body;
    if (!criarClienteSchema.isValid(req.body)) {
      throw new AppError("Erro na validação dos campos");
    }
    const result = await clienteCasoDeUso.execute({
      emailCliente,
      moradaCliente,
      nomeCliente,
      numeroContribuinte,
      telefoneCliente,
    });
    return res.status(201).json(result);
  }
}
export { CriarClienteController };
