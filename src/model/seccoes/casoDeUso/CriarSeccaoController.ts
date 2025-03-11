import { CriarSeccaoCasoDeUso } from "./CriarSeccaoCasoDeUso";
import { Request, Response } from "express";
class CriarSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const seccaoCasoDeUso = new CriarSeccaoCasoDeUso();
    const { nomeSeccao, descricaoSeccao } = req.body;
    const result = await seccaoCasoDeUso.execute({
      nomeSeccao,
      descricaoSeccao,
    });
    return res.status(201).json(result);
  }
}
export { CriarSeccaoController };
