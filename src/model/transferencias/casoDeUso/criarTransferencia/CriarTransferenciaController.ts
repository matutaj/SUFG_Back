import { CriarTransferenciaCasoDeUso } from "./CriarTransferenciaCasoDeUso"
import { Request, Response } from "express"
class CriarTransferenciaController{
    async handle (req: Request, res: Response): Promise<any>{
        const criarTransferenciaCasoDeUso = new CriarTransferenciaCasoDeUso()
        const {id_funcionario, id_localizacao, id_produto, dataTransferencia, quantidadeTransferida} = req.body
        const result = await criarTransferenciaCasoDeUso.execute({id_funcionario, id_localizacao, id_produto, dataTransferencia, quantidadeTransferida})
        return res.status(201).json(result)
    }
}
export {CriarTransferenciaController}