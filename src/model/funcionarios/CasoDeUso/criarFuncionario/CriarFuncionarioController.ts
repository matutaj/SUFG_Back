import { CriarFuncionarioCasoDeUso } from "./CriarFuncionarioCasoDeUso";
import { Request, Response } from "express";
import { criarFuncionarioSchema } from "../../../../schema/funcionarios";
class criarFuncionarioController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncionarioCasoDeUso = new CriarFuncionarioCasoDeUso();
        const { nomeFuncionario, emailFuncionario, telefoneFuncionario, moradaFuncionario, senha, numeroBI } = req.body;
        if (!criarFuncionarioSchema.isValidSync(req.body)) {
            return res.status(400).json({ error: "Dados inválidos" });
        }
        const result = await criarFuncionarioCasoDeUso.execute({ nomeFuncionario, emailFuncionario, telefoneFuncionario, moradaFuncionario, senha, numeroBI });
        return res.status(201).json(result);
    }

}
export {criarFuncionarioController}