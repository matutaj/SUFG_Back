import { Request, Response } from "express";
import { AtualizarPermissaoCasoDeUso } from "./AtualizarPermissaoCasoDeUso";

class AtualizarPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarPermissaoCasoDeUso = new AtualizarPermissaoCasoDeUso();
        const { id, descricao, nome } = req.body;
        const result = await atualizarPermissaoCasoDeUso.execute({ id, descricao, nome });
        return res.status(200).json(result);
    }
}
export { AtualizarPermissaoController };