import { Request, Response } from "express";
import { CriarVendaProdutoCasoDeUso } from "./CriarVendaProdutoCasoDeUso";
import { DadosVendaProduto } from "../../repositorioVendaProduto/IVendaProduto";

class CriarVendaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarVendaProdutoCasoDeUso = new CriarVendaProdutoCasoDeUso();
    const { id_produto, id_venda, quantidadeVendida } = req.body;
    if (!criarVendaProdutoCasoDeUso) return res.status(400).json({});
    const result = await criarVendaProdutoCasoDeUso.execute({
      id_produto,
      id_venda,
      quantidadeVendida,
    });
    return res.status(201).json(result);
  }
}
export { CriarVendaProdutoController };
