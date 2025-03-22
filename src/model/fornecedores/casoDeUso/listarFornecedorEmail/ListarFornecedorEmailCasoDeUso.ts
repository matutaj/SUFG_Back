import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../RepositorioFornecedor/implementacoes/RepositorioFornecedor";
class ListarEmailFornecedorCasoDeUso {
  async execute(emailFornecedor: string): Promise<fornecedores | undefined> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!emailFornecedor) {
      throw new Error("O email é obrigatório para a busca");
    }

    const result = await repositorioFornecedor.listarEmailFornecedor(emailFornecedor);
    return result;
  }
}

export { ListarEmailFornecedorCasoDeUso };