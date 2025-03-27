import { caixas } from "@prisma/client";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class ListarUmCaixaPeloIdCasoDeUso {
  async execute(id: string): Promise<caixas | undefined> {
    const repositorioCaixa = new CaixaRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioCaixa.listarUmCaixaPeloId(id);
    return result;
  }
}

export { ListarUmCaixaPeloIdCasoDeUso };