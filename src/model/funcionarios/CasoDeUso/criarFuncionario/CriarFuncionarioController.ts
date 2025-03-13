import { CriarFuncionarioCasoDeUso } from "./CriarFuncionarioCasoDeUso";
import { Request, Response } from "express";
class criarFuncionarioController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncionarioCasoDeUso = new CriarFuncionarioCasoDeUso();
        const { nomeFuncionario, emailFuncionario, telefoneFuncionario, moradaFuncionario, senha, numeroBI } = req.body;
        const result = await criarFuncionarioCasoDeUso.execute({ nomeFuncionario, emailFuncionario, telefoneFuncionario, moradaFuncionario, senha, numeroBI });
        return res.status(201).json(result);
    }

}
export {criarFuncionarioController}