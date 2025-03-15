import { CriarFuncaoCasoDeUso } from "./CriarFuncaoCasoDeUso";
import { Request, Response } from "express";

class CriarFuncaoController{
    async handle(req: Request, res: Response): Promise<any> {
        const funcaoCasoDeUso = new CriarFuncaoCasoDeUso();
        const { nome, descricao } = req.body;
        const result = await funcaoCasoDeUso.execute({ nome, descricao });
        return res.status(201).json(result);
    }
}
export {CriarFuncaoController}