import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../RepositorioFornecedor/implementacoes/RepositorioFornecedor";
class ListarUmFornecedorPeloIdCasoDeUso {
  async execute(id: string): Promise<fornecedores | undefined> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioFornecedor.listarUmFornecedorPeloId(id);
    return result;
  }
}

export { ListarUmFornecedorPeloIdCasoDeUso };