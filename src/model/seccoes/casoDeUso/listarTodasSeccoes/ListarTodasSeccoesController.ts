import { ListarTodosClienteCasoDeUso } from "../../../clientes/casoDeUso/listarTodosClientes/ListarTodosClienteCasoDeUso";
import { Request, Response } from "express";

class ListarTodasSeccoesController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarTodosClienteCasoDeUso = new ListarTodosClienteCasoDeUso();
        const result = await listarTodosClienteCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodasSeccoesController };