import { prateleiras } from "@prisma/client";
import { DadosPrateleira } from "../../repositorioPrateleira/IPrateleira";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { AppError } from "../../../../errors/AppError";

class AtualizarPrateleiraCasoDeUso {
  async execute({
    id,
    nomePrateleira,
    descricao,
  }: DadosPrateleira): Promise<prateleiras> {
    const repositorioPrateleira = new PrateleiraRepositorio();

    if (!id) {
      throw new AppError("O ID da prateleira é obrigatório para atualização");
    }

    const existePrateleira = await repositorioPrateleira.listarUmaPrateleiraPeloId(id);
    if (!existePrateleira) {
      throw new AppError("Não existe uma prateleira com esse id");
    }

    const prateleiraComMesmoNome = await repositorioPrateleira.listarUmaPrateleiraPeloNome(nomePrateleira);
    if (prateleiraComMesmoNome && prateleiraComMesmoNome.id !== id) {
      throw new AppError("Já existe uma prateleira com esse nome");
    }

    const result = await repositorioPrateleira.atualizarPrateleira({
      id,
      nomePrateleira,
      descricao,
    });

    return result;
  }
}

export { AtualizarPrateleiraCasoDeUso };