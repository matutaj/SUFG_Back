import { funcionariosCaixa } from "@prisma/client";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";

class ListarUmFuncionarioCaixaPelaAberturaCasoDeUso {
  async execute(horarioAbertura: Date): Promise<funcionariosCaixa | undefined> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();

    if (!horarioAbertura) {
      throw new Error("O horário de abertura é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPelaAbertura(horarioAbertura);
    return result;
  }
}

export { ListarUmFuncionarioCaixaPelaAberturaCasoDeUso };