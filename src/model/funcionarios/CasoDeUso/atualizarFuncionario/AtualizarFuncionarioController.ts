import { Request, Response } from "express";
import { AtualizarFuncionarioCasoDeUso } from "./AtualizarFuncionarioCasoDeUso";

class AtualizarFuncionarioController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarFuncionarioCasoDeUso = new AtualizarFuncionarioCasoDeUso();
        const { id } = req.params;
        const { numeroBI, nomeFuncionario, senha, moradaFuncionario, telefoneFuncionario, emailFuncionario } = req.body;
        const result = await atualizarFuncionarioCasoDeUso.execute({ id, numeroBI, nomeFuncionario, senha, moradaFuncionario, telefoneFuncionario, emailFuncionario });
        return res.status(201).json(result);
    }
}
export { AtualizarFuncionarioController };