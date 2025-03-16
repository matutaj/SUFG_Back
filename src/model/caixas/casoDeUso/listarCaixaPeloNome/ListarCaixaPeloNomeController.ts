import { Request, Response } from "express";
import { ListarCaixaPeloNomeCasoDeUso } from "./ListarCaixaPeloNomeCasoDeUso";
import { ListarAlertaPeloNomeCasoDeUso } from "../../../alertas/casoDeUso/listarAlertaPeloNome/ListarAlertaPeloNomeCasoDeUso";

class ListarCaixaPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarCaixaPeloNomeCasoDeUso = new ListarAlertaPeloNomeCasoDeUso();
        const { nomeCaixa } = req.params;
        const result = await listarCaixaPeloNomeCasoDeUso.execute(nomeCaixa);
        return res.status(201).json(result);
    }
}
export { ListarCaixaPeloNomeController }