import { Request, Response } from "express";
import { CriarFuncionarioFuncaoCasoDeUso } from "./CriarFuncionarioFuncaoCasoDeUso";
import { criarFuncionarioFuncaoSchema } from "../../../../schema/funcionariosFuncoes";
class CriarFuncionarioFuncaoController {
    async handle (req: Request, res: Response): Promise<any> {
        const criarFuncionarioFuncao = new CriarFuncionarioFuncaoCasoDeUso()
        const { id_funcao, id_funcionario} = req.body
        if (!criarFuncionarioFuncaoSchema.validate(req.body)) return res.status(400).json({message: "Dados inválidos"})
        const result = await criarFuncionarioFuncao.execute({id_funcao, id_funcionario})
        return res.status(201).json(result)
    }
}
export { CriarFuncionarioFuncaoController}