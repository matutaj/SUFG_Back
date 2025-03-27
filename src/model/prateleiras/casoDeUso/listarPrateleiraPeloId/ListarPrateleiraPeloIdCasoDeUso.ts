import { prateleiras } from "@prisma/client";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { AppError } from "../../../../errors/AppError";

class ListarUmaPrateleiraPeloIdCasoDeUso {
  async execute(id: string): Promise<prateleiras | undefined> {
    const repositorioPrateleira = new PrateleiraRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioPrateleira.listarUmaPrateleiraPeloId(id);
    return result;
  }
}

export { ListarUmaPrateleiraPeloIdCasoDeUso };