import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
class ListarTodosClienteCasoDeUso {
  async execute(): Promise<clientes[]> {
    const clienteRepositorio = new ClienteRepositorio();

    const result = await clienteRepositorio.listarTodosClientes();

    return result;
  }
}

export { ListarTodosClienteCasoDeUso };
