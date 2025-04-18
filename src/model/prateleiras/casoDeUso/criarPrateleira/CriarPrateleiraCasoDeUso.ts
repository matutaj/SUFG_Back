import { AppError } from "../../../../errors/AppError";
import { DadosPrateleira } from "../../repositorioPrateleira/IPrateleira";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { prateleiras } from "@prisma/client";
class CriarPrateleiraCasoDeUso {
  async execute({
    descricao,
    nomePrateleira,
  }: DadosPrateleira): Promise<prateleiras> {
    const prateleiraRepositorio = new PrateleiraRepositorio();
    const existeNome = await prateleiraRepositorio.listarUmaPrateleiraPeloNome(
      nomePrateleira
    );
    if (existeNome) {
      throw new AppError("Já existe uma prateleira com esse nome");
    }
    const result = await prateleiraRepositorio.criarPrateleira({
      descricao,
      nomePrateleira,
    });
    return result;
  }
}
export { CriarPrateleiraCasoDeUso };
