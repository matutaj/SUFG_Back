import { fornecedores } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";
class ListarUmFornecedorPeloIdCasoDeUso {
  async execute(id: string): Promise<fornecedores | undefined> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioFornecedor.listarUmFornecedorPeloId(id);
    return result;
  }
}

export { ListarUmFornecedorPeloIdCasoDeUso };
