import { Request, Response } from "express";
import { ListarAlertaPeloNomeCasoDeUso } from "./ListarAlertaPeloNomeCasoDeUso";

class ListarAlertaPeloNomeController {
    async handle(req: Request, res: Response) {
        const { nomeAlerta } = req.body;
        const listarAlertaPeloNomeCasoDeUso = new ListarAlertaPeloNomeCasoDeUso();
        const alerta = await listarAlertaPeloNomeCasoDeUso.execute(nomeAlerta);
        return res.json(alerta);
    }
}
export { ListarAlertaPeloNomeController };