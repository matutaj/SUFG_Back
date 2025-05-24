import { caixas } from "@prisma/client";
import { DadosCaixa } from "../../repositorioCaixa/ICaixa";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class CriarCaixaCasoDeUso {
  async execute({ descricao, nomeCaixa, mac }: DadosCaixa): Promise<caixas> {
    const repositorioCaixa = new CaixaRepositorio();
    const existeNome = await repositorioCaixa.listarUmCaixaPeloNome(nomeCaixa);
    if (existeNome) {
      throw new AppError("Já existe um caixa com esse nome");
    }
    const existeMac = await repositorioCaixa.listarUmCaixaPeloMac(mac);
    if (existeMac) {
      throw new AppError("Já existe um caixa com esse mac");
    }
    const result = await repositorioCaixa.criarCaixa({
      descricao,
      nomeCaixa,
      mac
    });
    return result;
  }
}
export { CriarCaixaCasoDeUso };
