import { Request, Response } from "express";
import { AtualizarSeccaoCasoDeUso } from "./AtualizarSeccaoCasoDeUso";
import { atualizarSeccaoSchema } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarSeccaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const seccaoCasoDeUso = new AtualizarSeccaoCasoDeUso();
        const { id } = req.params;
        const { nomeSeccao, descricaoSeccao } = req.body;
        if (!atualizarSeccaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        if (!atualizarSeccaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await seccaoCasoDeUso.execute({ id, nomeSeccao, descricaoSeccao });
        return res.status(201).json(result);
    }
}
export { AtualizarSeccaoController };