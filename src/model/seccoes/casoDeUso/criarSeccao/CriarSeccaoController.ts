import { CriarSeccaoCasoDeUso } from "./CriarSeccaoCasoDeUso";
import { Request, Response } from "express";
import { criarSeccaoSchema } from "../../../../schema/seccoes";
class CriarSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const seccaoCasoDeUso = new CriarSeccaoCasoDeUso();
    const { nomeSeccao, descricaoSeccao } = req.body;
    if (!criarSeccaoSchema.validate(req.body)) return res.status(400).json({});
    const result = await seccaoCasoDeUso.execute({
      nomeSeccao,
      descricaoSeccao,
    });
    return res.status(201).json(result);
  }
}
export { CriarSeccaoController };
