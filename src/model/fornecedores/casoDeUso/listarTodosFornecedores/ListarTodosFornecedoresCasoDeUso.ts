import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";

class ListarTodosFornecedoresCasoDeUso {
  async execute(): Promise<fornecedores[]> {
    const fornecedorRepositorio = new FornecedorRepositorio();
    const result = await fornecedorRepositorio.listarTodosFornecedores();
    return result;
  }
}
export { ListarTodosFornecedoresCasoDeUso };
