import { Request, Response } from "express";
import { DeleteCorredorCasoDeUso } from "./DeleteCorredorCasoDeUso";

class DeleteCorredorController {
    async handle(req: Request, res: Response): Promise<any> {
        const deleteCorredorCasoDeUso = new DeleteCorredorCasoDeUso();
        const { id } = req.params;
        const result = await deleteCorredorCasoDeUso.execute(id);
        return res.status(201).json(result);
    }
}
export { DeleteCorredorController };