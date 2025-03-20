import { Request, Response } from "express";
import { DeleteAlertaCasoDeUso } from "./DeleteAlertaCasoDeUso";

class DeleteAlertaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deleteAlertaCasoDeUso = new DeleteAlertaCasoDeUso();
        await deleteAlertaCasoDeUso.execute(id);
        res.sendStatus(200);
    }
}

export { DeleteAlertaController };