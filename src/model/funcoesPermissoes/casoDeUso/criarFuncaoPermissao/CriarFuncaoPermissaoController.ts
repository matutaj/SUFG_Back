import { Request, Response } from "express";
import { CriarFuncaoPermissaoCasoDeUso } from "./CriarFuncaoPermissaoCasoDeUso";

class CriarFuncaoPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncaoPermissaoCasoDeUso = new CriarFuncaoPermissaoCasoDeUso();
        const { id_funcao, id_permissao } = req.body;
        const result = await criarFuncaoPermissaoCasoDeUso.execute({ id_funcao, id_permissao });
        return res.status(201).json(result);
    }
}
export { CriarFuncaoPermissaoController}