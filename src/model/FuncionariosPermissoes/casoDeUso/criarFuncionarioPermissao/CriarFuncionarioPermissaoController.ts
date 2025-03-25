import { Request, Response } from "express";
import { CriarFuncionarioPermissaoCasoDeUso } from "./CriarFuncionarioPermissaoCasoDeUso";
import { criarFuncionarioPermissaoSchema } from "../../../../schema/funcionariosPermissoes";
import { AppError } from "../../../../errors/AppError";
class CriarFuncionarioPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncionarioPermissaoCasoDeUso = new CriarFuncionarioPermissaoCasoDeUso();
        const {  id_funcionario, id_permissao } = req.body;
        if (!criarFuncionarioPermissaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await criarFuncionarioPermissaoCasoDeUso.execute({ id_funcionario, id_permissao });
        return res.status(201).json(result);
    }
}
export { CriarFuncionarioPermissaoController }
