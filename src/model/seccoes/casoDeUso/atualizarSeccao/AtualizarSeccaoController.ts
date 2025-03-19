import { Request, Response } from "express";
import { AtualizarSeccaoCasoDeUso } from "./AtualizarSeccaoCasoDeUso";

class AtualizarSeccaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const seccaoCasoDeUso = new AtualizarSeccaoCasoDeUso();
        const { id } = req.params;
        const { nomeSeccao, descricaoSeccao } = req.body;
        const result = await seccaoCasoDeUso.execute({ id, nomeSeccao, descricaoSeccao });
        return res.status(201).json(result);
    }
}
export { AtualizarSeccaoController };