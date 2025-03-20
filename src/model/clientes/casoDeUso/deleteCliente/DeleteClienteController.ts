import { Request, Response } from "express";    
import { DeleteClienteCasoDeUso } from "./DeleteClienteCasoDeUso";

class DeleteClienteController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deleteClienteCasoDeUso = new DeleteClienteCasoDeUso();
        const result = await deleteClienteCasoDeUso.execute(id);
        return res.status(200).json(result);
    }
}
export { DeleteClienteController }