import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";

class ListarClientePeloNomeCasoDeUso {
  async execute(nomeCliente: string): Promise<clientes> {
    const clienteRepositorio = new ClienteRepositorio();

    const existeNomeCliente = await clienteRepositorio.listarUmClientePeloNome(
      nomeCliente
    );

    if (!existeNomeCliente) {
      throw new Error("Não existe um cliente com esse nome");
    }
    return existeNomeCliente;
  }
}

export { ListarClientePeloNomeCasoDeUso };
