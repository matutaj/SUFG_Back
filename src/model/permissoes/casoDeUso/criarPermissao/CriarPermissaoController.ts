import { Request, Response } from "express";
import { CriarPermissaoCasoDeUso } from "./CriarPermissaoCasoDeUso";
import { criarPermissaoSchema } from "../../../../schema/permissoes";
class CriarPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarPermissaoCasoDeUso = new CriarPermissaoCasoDeUso();
        const { descricao, nome } = req.body;
        if (!criarPermissaoSchema.validate({ descricao, nome })) return res.status(400).json({ message: "Dados inválidos" });
        const result = await criarPermissaoCasoDeUso.execute({ descricao, nome });
        return res.status(201).json(result);
    }
}
export {CriarPermissaoController}