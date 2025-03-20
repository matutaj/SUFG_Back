import { Request, Response } from "express";
import { DeleteCaixaCasoDeUso } from "./DeleteCaixaCasoDeUso";

class DeleteCaixaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deleteCaixaCasoDeUso = new DeleteCaixaCasoDeUso();
        await deleteCaixaCasoDeUso.execute(id);
        res.status(200).send("Caixa eliminado com sucesso");
    }
}
export { DeleteCaixaController };