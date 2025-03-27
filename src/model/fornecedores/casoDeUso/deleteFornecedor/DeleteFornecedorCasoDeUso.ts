import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { AppError } from "../../../../errors/AppError";
class DeleteFornecedorCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!id) {
      throw new AppError("O ID do fornecedor é obrigatório para exclusão");
    }

    const existeFornecedor = await repositorioFornecedor.listarUmFornecedorPeloId(id);
    if (!existeFornecedor) {
      throw new AppError("Não existe um fornecedor com esse id");
    }

    await repositorioFornecedor.eliminarFornecedor(id);
  }
}

export { DeleteFornecedorCasoDeUso };