import { prateleiras } from "@prisma/client";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { AppError } from "../../../../errors/AppError";

class DeletePrateleiraCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioPrateleira = new PrateleiraRepositorio();

    if (!id) {
      throw new AppError("O ID da prateleira é obrigatório para exclusão");
    }

    const existePrateleira = await repositorioPrateleira.listarUmaPrateleiraPeloId(id);
    if (!existePrateleira) {
      throw new AppError("Não existe uma prateleira com esse id");
    }

    await repositorioPrateleira.eliminarPrateleira(id);
  }
}

export { DeletePrateleiraCasoDeUso };