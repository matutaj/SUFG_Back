import { Request, Response } from "express"
import { CriarTransacaoCasoDeUso } from "./CriarTransacaoCasoDeUso"
class CriarTransacaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarTransacaoCasoDeUso = new CriarTransacaoCasoDeUso()
        const {ID_cliente, ID_caixa, valorTotalTransacao, dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento} = req.body
        const result = await criarTransacaoCasoDeUso.execute({ID_cliente, ID_caixa, valorTotalTransacao, dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento})
        return res.status(201).json(result)
    }
}
export {CriarTransacaoController}