import { Request, Response } from "express";
import { CriarPermissaoCasoDeUso } from "./CriarPermissaoCasoDeUso";
class CriarPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarPermissaoCasoDeUso = new CriarPermissaoCasoDeUso();
        const { descricao, nome } = req.body;
        const result = await criarPermissaoCasoDeUso.execute({ descricao, nome });
        return res.status(201).json(result);
    }
}
export {CriarPermissaoController}