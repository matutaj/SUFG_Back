import { Request, Response } from "express";
import { CriarFuncaoPermissaoCasoDeUso } from "./CriarFuncaoPermissaoCasoDeUso";
import { criarFuncionarioPermissaoSchema } from "../../../../schema/funcionariosPermissoes";    

class CriarFuncionarioPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncaoPermissaoCasoDeUso = new CriarFuncaoPermissaoCasoDeUso();
        const { id_funcao, id_permissao } = req.body;
        if (!criarFuncionarioPermissaoSchema.validate(req.body)) return res.status(400).json({ message: "Dados inválidos" });
        const result = await criarFuncaoPermissaoCasoDeUso.execute({ id_funcao, id_permissao });
        return res.status(201).json(result);
    }
}
export { CriarFuncionarioPermissaoController}