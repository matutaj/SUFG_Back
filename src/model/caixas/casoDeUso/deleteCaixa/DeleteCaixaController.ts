import { Request, Response } from "express";
import { DeleteCaixaCasoDeUso } from "./DeleteCaixaCasoDeUso";
import { deletarCaixaSchema } from "../../../../schema/caixas";
import { AppError } from "../../../../errors/AppError";
class DeleteCaixaController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteCaixaCasoDeUso = new DeleteCaixaCasoDeUso();
    if (!await deletarCaixaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    await deleteCaixaCasoDeUso.execute(id);
    res.status(200).send("Caixa eliminado com sucesso");
  }
}
export { DeleteCaixaController };
