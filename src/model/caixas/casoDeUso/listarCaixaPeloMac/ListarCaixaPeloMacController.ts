import { Request, Response } from "express";
import { ListarCaixaPeloMacCasoDeUso } from "./ListarCaixaPeloMacCasoDeUso";
import { listarCaixaPeloMacSchema } from "../../../../schema/caixas";
import { AppError } from "../../../../errors/AppError";

class ListarCaixaPeloMacController {
    async handle (req: Request, res: Response): Promise<any> {
        const listarCaixaPeloMacCasoDeUso = new ListarCaixaPeloMacCasoDeUso();
        const { mac } = req.params;
        if (!await listarCaixaPeloMacSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await listarCaixaPeloMacCasoDeUso.execute(mac);
        return res.status(200).json(result); 
    }
}
export { ListarCaixaPeloMacController };