import { Request, Response } from "express";
import { ListarAlertaPeloNomeCasoDeUso } from "./ListarAlertaPeloNomeCasoDeUso";
import { listarAlertaPeloNome } from "../../../../schema/alertas";
class ListarAlertaPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const { nomeAlerta } = req.body;
        const listarAlertaPeloNomeCasoDeUso = new ListarAlertaPeloNomeCasoDeUso();
        if(!listarAlertaPeloNome.isValid(req.body)) throw new Error("Erro na Validação dos dados");
        const alerta = await listarAlertaPeloNomeCasoDeUso.execute(nomeAlerta);
        return res.json(alerta);
    }
}
export { ListarAlertaPeloNomeController };