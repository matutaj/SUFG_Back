import { prateleiras } from "@prisma/client";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";


class ListarPrateleiraPeloNomeCasoDeUso {
  async execute(nomePrateleira: string): Promise<prateleiras> {
    const prateleiraRepositorio = new PrateleiraRepositorio();

    const existeNomePrateleira = await prateleiraRepositorio.listarUmaPrateleiraPeloNome(
      nomePrateleira
    );

    if (!existeNomePrateleira) {
      throw new Error("Não existe uma prateleira com esse nome");
    }
    return existeNomePrateleira;
  }
}

export { ListarPrateleiraPeloNomeCasoDeUso };