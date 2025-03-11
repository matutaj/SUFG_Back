import { Request, Response } from "express"
import { CriarClienteCasoDeUso } from "./CriarClienteCasoDeUso"
class CriarClienteController{
    async handle(req: Request, res: Response): Promise<any> {
        const clienteCasoDeUso = new CriarClienteCasoDeUso()
        const {emailCliente, moradaCliente, nomeCliente, numeroContribuinte, telefoneCliente} = req.body
        const result = await clienteCasoDeUso.execute({emailCliente, moradaCliente, nomeCliente, numeroContribuinte, telefoneCliente})
        return res.status(201).json(result)
    }
    
}
export {CriarClienteController}