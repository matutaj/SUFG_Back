import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { AppError } from "../../../../errors/AppError";
class ListarTelefoneFornecedorCasoDeUso {
  async execute(telefoneFornecedor: number): Promise<fornecedores | undefined> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!telefoneFornecedor) {
      throw new AppError("O telefone é obrigatório para a busca");
    }

    const result = await repositorioFornecedor.listarTelefoneFornecedor(telefoneFornecedor);
    return result;
  }
}

export { ListarTelefoneFornecedorCasoDeUso };