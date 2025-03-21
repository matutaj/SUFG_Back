import { caixas } from "@prisma/client";
import { DadosCaixa } from "../../repositorioCaixa/ICaixa";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class AtualizarCaixaCasoDeUso {
  async execute({
    id,
    nomeCaixa,
    descricaoCaixa,
  }: DadosCaixa): Promise<caixas> {
    const repositorioCaixa = new CaixaRepositorio();

    if (!id) {
      throw new AppError("O ID do caixa é obrigatório para atualização");
    }

    const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id);
    if (!existeCaixa) {
      throw new AppError("Não existe um caixa com esse id");
    }

    const caixaComMesmoNome = await repositorioCaixa.listarUmCaixaPeloNome(
      nomeCaixa
    );
    if (caixaComMesmoNome && caixaComMesmoNome.id !== id) {
      throw new AppError("Já existe um caixa com esse nome");
    }

    const result = await repositorioCaixa.atualizarCaixa({
      id,
      nomeCaixa,
      descricaoCaixa,
    });

    return result;
  }
}

export { AtualizarCaixaCasoDeUso };
