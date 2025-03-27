import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../RepositorioFornecedor/implementacoes/RepositorioFornecedor";
import { AppError } from "../../../../errors/AppError";
class ListarFornecedorNumeroContribuinteCasoDeUso {
  async execute(nif: string): Promise<fornecedores | undefined> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!nif) {
      throw new AppError("O NIF é obrigatório para a busca");
    }

    const result = await repositorioFornecedor.listarNumeroDeContribuinte(nif);
    return result;
  }
}

export { ListarFornecedorNumeroContribuinteCasoDeUso };
