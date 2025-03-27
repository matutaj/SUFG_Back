import { prateleiras } from "@prisma/client";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { AppError } from "../../../../errors/AppError";

class ListarPrateleiraPeloNomeCasoDeUso {
  async execute(nomePrateleira: string): Promise<prateleiras> {
    const prateleiraRepositorio = new PrateleiraRepositorio();

    const existeNomePrateleira =
      await prateleiraRepositorio.listarUmaPrateleiraPeloNome(nomePrateleira);

    if (!existeNomePrateleira) {
      throw new AppError("Não existe uma prateleira com esse nome");
    }
    return existeNomePrateleira;
  }
}

export { ListarPrateleiraPeloNomeCasoDeUso };
