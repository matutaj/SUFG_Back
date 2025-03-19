import { CriarFuncaoCasoDeUso } from "./CriarFuncaoCasoDeUso";
import { Request, Response } from "express";
import { criarFuncaoSchema } from "../../../../schema/funcoes";

class CriarFuncaoController{
    async handle(req: Request, res: Response): Promise<any> {
        const funcaoCasoDeUso = new CriarFuncaoCasoDeUso();
        const { nome, descricao } = req.body;
        if (!criarFuncaoSchema.validate({ nome, descricao })) return res.status(400).json({ message: "Dados inválidos" });
        const result = await funcaoCasoDeUso.execute({ nome, descricao });
        return res.status(201).json(result);
    }
}
export {CriarFuncaoController}