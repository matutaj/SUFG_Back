import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { AppError } from "../../../../errors/AppError";

class ListarFornecedorPeloNomeCasoDeUso {
  async execute(nomeFornecedor: string): Promise<fornecedores> {
    const fornecedorRepositorio = new FornecedorRepositorio();
    const existeNomeFornecedor =
      await fornecedorRepositorio.listarUmFornecedorPeloNome(nomeFornecedor);
    if (!existeNomeFornecedor) {
      throw new AppError("Fornecedor não encontrado");
    }
    return existeNomeFornecedor;
  }
}
export { ListarFornecedorPeloNomeCasoDeUso };
