import { vendas } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { AppError } from "../../../../errors/AppError";

class DeleteVendaCasoDeUso {
  async execute(id: string): Promise<vendas> {
    const repositorioVenda = new VendaRepositorio();

    if (!id) {
      throw new AppError("O ID da venda é obrigatório para exclusão");
    }

    const existeVenda = await repositorioVenda.listarVendaPorId(id);
    if (!existeVenda) {
      throw new AppError("Não existe uma venda com esse id");
    }

    const result = await repositorioVenda.eliminarVenda(id);
    return result;
  }
}

export { DeleteVendaCasoDeUso };