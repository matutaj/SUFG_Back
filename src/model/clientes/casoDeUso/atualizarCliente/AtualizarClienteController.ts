import { Request, Response } from "express";
import { AtualizarClienteCasoDeUso } from "./AtualizarClienteCasoDeUso";

class AtualizarClienteController {
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { emailCliente, moradaCliente, nomeCliente, numeroContribuinte, telefoneCliente } = req.body;
        const atualizarClienteCasoDeUso = new AtualizarClienteCasoDeUso();
        const result = await atualizarClienteCasoDeUso.execute({ id, emailCliente, moradaCliente, nomeCliente, numeroContribuinte, telefoneCliente });
        return res.status(201).json(result);
    }
}
export { AtualizarClienteController };