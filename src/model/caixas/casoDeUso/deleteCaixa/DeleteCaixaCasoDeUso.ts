import { caixas } from "@prisma/client";
import { ICaixa } from "../../repositorioCaixa/ICaixa";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";

class DeleteCaixaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCaixa = new CaixaRepositorio();

    if (!id) {
      throw new Error("O ID do caixa é obrigatório para eliminação");
    }

    const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id);
    if (!existeCaixa) {
      throw new Error("Não existe um caixa com esse id");
    }

    await repositorioCaixa.eliminarCaixa(id);
  }
}

export {DeleteCaixaCasoDeUso };