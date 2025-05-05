import { Request, Response } from "express";
import { AtualizarFuncionarioCasoDeUso } from "./AtualizarFuncionarioCasoDeUso";
import { atualizarFuncionarioSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncionarioController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarFuncionarioCasoDeUso = new AtualizarFuncionarioCasoDeUso();
        const { id } = req.params;
        const { numeroBI, nomeFuncionario, senha, moradaFuncionario, telefoneFuncionario, emailFuncionario, id_funcao  } = req.body;
        if (!await atualizarFuncionarioSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        if (!await atualizarFuncionarioSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await atualizarFuncionarioCasoDeUso.execute({ id, numeroBI, nomeFuncionario, senha, moradaFuncionario, telefoneFuncionario, emailFuncionario, id_funcao });
        return res.status(201).json(result);
    }
}
export { AtualizarFuncionarioController };