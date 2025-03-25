import { Request, Response } from "express";
import { AtualizarClienteCasoDeUso } from "./AtualizarClienteCasoDeUso";
import { atualizarClienteSchema } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class AtualizarClienteController {
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { emailCliente, moradaCliente, nomeCliente, numeroContribuinte, telefoneCliente } = req.body;
        const atualizarClienteCasoDeUso = new AtualizarClienteCasoDeUso();
        if (!atualizarClienteSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        if (!atualizarClienteSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await atualizarClienteCasoDeUso.execute({ id, emailCliente, moradaCliente, nomeCliente, numeroContribuinte, telefoneCliente });
        return res.status(201).json(result);
    }
}
export { AtualizarClienteController };