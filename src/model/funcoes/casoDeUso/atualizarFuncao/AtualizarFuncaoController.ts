import { Request, Response } from "express";
import { AtualizarFuncaoCasoDeUso } from "./AtualizarFuncaoCasoDeUso";

class AtualizarFuncaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarFuncaoCasoDeUso = new AtualizarFuncaoCasoDeUso();
        const { id, descricao, nome } = req.body;
        const result = await atualizarFuncaoCasoDeUso.execute({ id, descricao, nome });
        return res.status(201).json(result);
    }
}

export { AtualizarFuncaoController };