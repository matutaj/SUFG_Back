import { Request, Response } from "express"
import { CriarVendaCasoDeUso } from "./CriarVendaCasoDeUso"
class CriarVendaController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarVendaCasoDeUso = new CriarVendaCasoDeUso()
        const {id_cliente, dataEmissao, dataValidade, id_funcionarioCaixa, numeroDocumento, tipoDocumento, valorTotal} = req.body
        const result = await criarVendaCasoDeUso.execute({id_cliente, dataEmissao, dataValidade, id_funcionarioCaixa, numeroDocumento, tipoDocumento, valorTotal})
        return res.status(201).json(result)
    }
}
export {CriarVendaController}