import { Request, Response } from "express"
import { CriarFuncionarioCaixaCasodeUso } from "./CriarFuncionarioCaixaCasoDeUso"
import { criarFuncionarioCaixaSchema } from "../../../../schema/funcionarioCaixa";
class CriarFuncionarioCaixaController{
    async handle(req:Request, res:Response):Promise<any>{
        const funcionarioCaixaCasoDeUso = new CriarFuncionarioCaixaCasodeUso()

        const {id_caixa,
            id_funcionario,
            estadoCaixa,
            quantidadaFaturada,
            horarioAbertura,
            horarioFechamento}= req.body;

            if(!criarFuncionarioCaixaSchema.isValid(req.body))
                throw new Error("Erro na Validação dos dados")

            const result = await funcionarioCaixaCasoDeUso.execute(req.body)
            return res.status(201).json(result)
    }
}
export {CriarFuncionarioCaixaController}