import { caixas } from "@prisma/client";
import { DadosCaixa } from "../../repositorioCaixa/ICaixa";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class CriarCaixaCasoDeUso {
  async execute({ descricaoCaixa, nomeCaixa }: DadosCaixa): Promise<caixas> {
    const repositorioCaixa = new CaixaRepositorio();
    const existeNome = await repositorioCaixa.listarUmCaixaPeloNome(nomeCaixa);
    if (existeNome) {
      throw new AppError("Já existe um caixa com esse nome");
    }
    const result = await repositorioCaixa.criarCaixa({
      descricaoCaixa,
      nomeCaixa,
    });
    return result;
  }
}
export { CriarCaixaCasoDeUso };
