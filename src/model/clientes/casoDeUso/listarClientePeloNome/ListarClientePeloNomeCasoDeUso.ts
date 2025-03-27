import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class ListarClientePeloNomeCasoDeUso {
  async execute(nomeCliente: string): Promise<clientes> {
    const clienteRepositorio = new ClienteRepositorio();

    const existeNomeCliente = await clienteRepositorio.listarUmClientePeloNome(
      nomeCliente
    );

    if (!existeNomeCliente) {
      throw new AppError("Não existe um cliente com esse nome");
    }
    return existeNomeCliente;
  }
}

export { ListarClientePeloNomeCasoDeUso };
