import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class DeleteCaixaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCaixa = new CaixaRepositorio();

    if (!id) {
      throw new AppError("O ID do caixa é obrigatório para eliminação");
    }

    const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id);
    if (!existeCaixa) {
      throw new AppError("Não existe um caixa com esse id");
    }

    await repositorioCaixa.eliminarCaixa(id);
  }
}

export { DeleteCaixaCasoDeUso };
