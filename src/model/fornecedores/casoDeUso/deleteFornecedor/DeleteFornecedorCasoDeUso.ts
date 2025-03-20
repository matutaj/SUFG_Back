import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../RepositorioFornecedor/implementacoes/RepositorioFornecedor";
class DeleteFornecedorCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!id) {
      throw new Error("O ID do fornecedor é obrigatório para exclusão");
    }

    const existeFornecedor = await repositorioFornecedor.listarUmFornecedorPeloId(id);
    if (!existeFornecedor) {
      throw new Error("Não existe um fornecedor com esse id");
    }

    await repositorioFornecedor.eliminarFornecedor(id);
  }
}

export { DeleteFornecedorCasoDeUso };