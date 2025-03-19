import { Request, Response } from "express";
import { ListarCaixaPeloNomeCasoDeUso } from "./ListarCaixaPeloNomeCasoDeUso";
import { listarCaixaPeloNome } from "../../../../schema/caixas";
class ListarCaixaPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarCaixaPeloNomeCasoDeUso = new ListarCaixaPeloNomeCasoDeUso();
        const { nomeCaixa } = req.params;
        if(!listarCaixaPeloNome.isValid(req.params)) throw new Error("Erro na Validação dos dados");
        const result = await listarCaixaPeloNomeCasoDeUso.execute(nomeCaixa);
        return res.status(201).json(result);
    }
}
export { ListarCaixaPeloNomeController }