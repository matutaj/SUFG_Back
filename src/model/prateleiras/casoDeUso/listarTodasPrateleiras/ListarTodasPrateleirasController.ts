import{ Response, Request } from "express";
import { ListarTodasPrateleirasCasoDeUso } from "./ListarTodasPrateleirasCasoDeUso";

class ListarTodasPrateleirasController {
    async handle(req: Request, res: Response) {
        const listarTodasPrateleirasCasoDeUso = new ListarTodasPrateleirasCasoDeUso();
        const result = await listarTodasPrateleirasCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodasPrateleirasController };