import { prateleiras } from "@prisma/client";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";

class DeletePrateleiraCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioPrateleira = new PrateleiraRepositorio();

    if (!id) {
      throw new Error("O ID da prateleira é obrigatório para exclusão");
    }

    const existePrateleira = await repositorioPrateleira.listarUmaPrateleiraPeloId(id);
    if (!existePrateleira) {
      throw new Error("Não existe uma prateleira com esse id");
    }

    await repositorioPrateleira.eliminarPrateleira(id);
  }
}

export { DeletePrateleiraCasoDeUso };