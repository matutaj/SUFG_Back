import { Request, Response } from "express";
import { CriarFuncionarioPermissaoCasoDeUso } from "./CriarFuncionarioPermissaoCasoDeUso";
import { criarFuncionarioPermissaoSchema } from "../../../../schema/funcionariosPermissoes";

class CriarFuncionarioPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncionarioPermissaoCasoDeUso = new CriarFuncionarioPermissaoCasoDeUso();
        const {  id_funcionario, id_permissao } = req.body;
        if (!criarFuncionarioPermissaoSchema.validate(req.body)) return res.status(400).json({ message: "Dados inválidos" });
        const result = await criarFuncionarioPermissaoCasoDeUso.execute({ id_funcionario, id_permissao });
        return res.status(201).json(result);
    }
}
export { CriarFuncionarioPermissaoController }
