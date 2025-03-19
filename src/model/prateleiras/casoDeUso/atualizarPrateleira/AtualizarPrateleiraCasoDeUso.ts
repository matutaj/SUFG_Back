import { prateleiras } from "@prisma/client";
import { DadosPrateleira } from "../../repositorioPrateleira/IPrateleira";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";

class AtualizarPrateleiraCasoDeUso {
  async execute({
    id,
    nomePrateleira,
    descricaoPrateleira,
  }: DadosPrateleira): Promise<prateleiras> {
    const repositorioPrateleira = new PrateleiraRepositorio();

    if (!id) {
      throw new Error("O ID da prateleira é obrigatório para atualização");
    }

    const existePrateleira = await repositorioPrateleira.listarUmaPrateleiraPeloId(id);
    if (!existePrateleira) {
      throw new Error("Não existe uma prateleira com esse id");
    }

    const prateleiraComMesmoNome = await repositorioPrateleira.listarUmaPrateleiraPeloNome(nomePrateleira);
    if (prateleiraComMesmoNome && prateleiraComMesmoNome.id !== id) {
      throw new Error("Já existe uma prateleira com esse nome");
    }

    const result = await repositorioPrateleira.atualizarPrateleira({
      id,
      nomePrateleira,
      descricaoPrateleira,
    });

    return result;
  }
}

export { AtualizarPrateleiraCasoDeUso };